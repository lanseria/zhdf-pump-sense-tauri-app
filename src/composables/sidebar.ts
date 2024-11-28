export function useSidebar() {
  const showSidebar = useState('sidebar', () => false)

  return {
    showSidebar,
  }
}
