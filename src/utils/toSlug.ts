export function toSlug(text: string): string {
    return text.toLowerCase().normalize('NFD').replaceAll(/[\u0300-\u036f]/g, '-') 
        .replaceAll(/\s+/g, '-') 
    .replaceAll(/[^a-z0-9-]/g, '-')
}
