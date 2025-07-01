import { ModuleConfig } from "@/lib/types/module";

export const ORG_MODULE_THEME_COLOR = "#6366f1"; // Indigo – always used as default

export const orgManagementModule: ModuleConfig = {
  id: "org-management",
  slug: "org-management",
  title: "Zarządzanie organizacją",
  description: "Panel administracyjny do zarządzania organizacją, użytkownikami i uprawnieniami",
  color: ORG_MODULE_THEME_COLOR, // indigo
  items: [
    {
      id: "organization-profile",
      label: "Profil organizacji",
      path: "/dashboard/organization/profile",
      icon: "Building2",
      type: "link",
    },
  ],
};

export async function getOrganizationModule() {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return orgManagementModule;
}