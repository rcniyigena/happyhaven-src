import { useState, type FormEvent, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WORK = ["Heating", "Plumbing", "Electrical", "Cable or Internet", "Appliance maintenance", "Smoke detector", "Property damage", "Other"];
const PRIORITY = ["Urgent", "Within a day", "Within a week", "Preventative maintenance", "Other"];

const field = "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

export function MaintenanceDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `House address: ${d.get("address")}`,
      `Requested by: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      `Nature of work: ${d.getAll("work").join(", ")} ${d.get("workOther") || ""}`,
      `Priority: ${d.get("priority")} ${d.get("priorityOther") || ""}`,
    ].join("\n");
    window.location.href = `mailto:info@happyhaven.info?subject=${encodeURIComponent("Maintenance request")}&body=${encodeURIComponent(body)}`;
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">Maintenance request form</DialogTitle>
          <DialogDescription>Tell us what needs attention and how soon.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">House address<input required name="address" className={field} /></label>
            <label className="grid gap-1.5 text-sm font-medium">Requested by<input required name="name" className={field} /></label>
            <label className="grid gap-1.5 text-sm font-medium">Phone<input name="phone" type="tel" className={field} /></label>
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Your email<input required name="email" type="email" className={field} /></label>
          </div>
          <fieldset className="grid gap-2">
            <legend className="mb-2 text-sm font-medium">Nature of work required</legend>
            <div className="grid grid-cols-2 gap-2">
              {WORK.map((w) => (
                <label key={w} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-secondary">
                  <input type="checkbox" name="work" value={w} className="accent-[var(--primary)]" />{w}
                </label>
              ))}
            </div>
            <input name="workOther" placeholder="Please specify" className={field} />
          </fieldset>
          <fieldset className="grid gap-2">
            <legend className="mb-2 text-sm font-medium">Priority</legend>
            <div className="flex flex-wrap gap-2">
              {PRIORITY.map((p) => (
                <label key={p} className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm has-[:checked]:border-primary has-[:checked]:bg-secondary">
                  <input type="radio" name="priority" value={p} required className="accent-[var(--primary)]" />{p}
                </label>
              ))}
            </div>
            <input name="priorityOther" placeholder="Please specify" className={field} />
          </fieldset>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="btn btn-outline">Close</button>
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
