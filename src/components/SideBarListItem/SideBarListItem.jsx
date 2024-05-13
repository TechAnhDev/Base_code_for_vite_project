import './SideBarListItem.scss'

function SideBarListItem({ items }) {
  return (
    <ul className="sidebarlist">
      {items.map((item, index) => (
        <li key={index} className="sidebarlistitem">
          <item.icon className="sidebaricon" />
          <span className="sidebarlistitemtext">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

export default SideBarListItem
