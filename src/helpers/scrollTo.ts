export const scrollTo = (id : string) => {
    const el = document.getElementById(id)
    if (el) {
        const offset = 70
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
    }
}