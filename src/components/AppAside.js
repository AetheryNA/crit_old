import navItems from '../helpers/navigationBarItems'
import Navigation from './Navigation'
import ProfileInfo from './ProfileStatus'

const Aside = () => {
  const navigationItems = navItems

  return (
    <aside className="app-aside">
      <ProfileInfo />
      <Navigation navigationItems={ navigationItems }/>

      <div className="app-aside__copyright">
        <p> Copyright&#169; 2021 </p>
      </div>
    </aside>
  )
}

export default Aside
