import Sidebar from "@/components/dashboard/Sidebar";
import { CreditCard, Globe2, ShieldCheck, BellRing, User, Save, Lock, Sparkles } from "lucide-react";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-16 overflow-auto">
        <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Settings</p>
              <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-white">Workspace preferences</h1>
              <p className="max-w-2xl text-sm text-muted-foreground mt-3">
                Configure your organization, privacy, and billing options from one central place. These settings affect your admin team and store operations.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              <Save size={16} />
              Save changes
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.85fr] gap-5">
            <div className="space-y-5">
              <section className="bg-card border border-border rounded-3xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Profile & company</p>
                    <p className="text-sm text-muted-foreground mt-1">Business details, contact information and workspace preferences.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-foreground/75">
                    <Sparkles size={16} />
                    Workspace settings
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Company name</span>
                    <input
                      type="text"
                      defaultValue="Nebula Commerce"
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Your role</span>
                    <input
                      type="text"
                      defaultValue="Administrator"
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Email address</span>
                    <input
                      type="email"
                      defaultValue="admin@nebula.com"
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Phone number</span>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                </div>
              </section>

              <section className="bg-card border border-border rounded-3xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Security settings</p>
                    <p className="text-sm text-muted-foreground mt-1">Control sign-in protection and session preferences.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-foreground/75">
                    <Lock size={16} />
                    Privacy
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-border bg-background p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">Two-factor authentication</p>
                        <p className="text-sm text-muted-foreground mt-1">Add an extra layer of security for all admin sign-ins.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 rounded-full bg-muted peer-checked:bg-primary transition-colors"></div>
                        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow-sm peer-checked:translate-x-5 transition-transform" />
                      </label>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-background p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">Require password change</p>
                        <p className="text-sm text-muted-foreground mt-1">Prompt users to update credentials every 90 days.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 rounded-full bg-muted peer-checked:bg-primary transition-colors"></div>
                        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow-sm peer-checked:translate-x-5 transition-transform" />
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-card border border-border rounded-3xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Notifications</p>
                    <p className="text-sm text-muted-foreground mt-1">Choose how your team receives updates and system alerts.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-foreground/75">
                    <BellRing size={16} />
                    Alerts
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl border border-border bg-background p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">Operational emails</p>
                        <p className="text-sm text-muted-foreground mt-1">News, system updates, and critical alerts.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 rounded-full bg-muted peer-checked:bg-primary transition-colors"></div>
                        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow-sm peer-checked:translate-x-5 transition-transform" />
                      </label>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-background p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-medium text-foreground">Weekly reporting</p>
                        <p className="text-sm text-muted-foreground mt-1">Receive an executive summary on performance and orders.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 rounded-full bg-muted peer-checked:bg-primary transition-colors"></div>
                        <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-background shadow-sm peer-checked:translate-x-5 transition-transform" />
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="bg-card border border-border rounded-3xl p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Billing & subscription</p>
                    <p className="text-sm text-muted-foreground mt-1">Review your active plan and payment details.</p>
                  </div>
                  <CreditCard size={20} className="text-primary" />
                </div>

                <div className="rounded-3xl border border-border bg-background p-5 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-foreground">Business Pro</p>
                      <p className="text-sm text-muted-foreground">Unlimited reports · Priority support</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Active</span>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center justify-between rounded-2xl bg-card p-4 border border-border">
                      <p className="text-sm text-muted-foreground">Renewal date</p>
                      <p className="font-medium text-foreground">May 7, 2026</p>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-card p-4 border border-border">
                      <p className="text-sm text-muted-foreground">Payment method</p>
                      <p className="font-medium text-foreground">Visa ending 1234</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-card border border-border rounded-3xl p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Language & region</p>
                    <p className="text-sm text-muted-foreground mt-1">Localize your workspace experience.</p>
                  </div>
                  <Globe2 size={20} className="text-foreground/70" />
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Timezone</span>
                    <select className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10">
                      <option>GMT-04:00 Eastern Time</option>
                      <option>GMT+00:00 London</option>
                      <option>GMT+05:30 India Standard Time</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Language</span>
                    <select className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Currency</span>
                    <select className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/10">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </label>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
