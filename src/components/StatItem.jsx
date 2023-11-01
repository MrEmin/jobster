import Wrapper from '../assets/wrappers/StatItem'

const StatItem = ({ title, count, icon, color, bg }) => {
  return (
    <Wrapper color={color} bcg={bg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  )
}
export default StatItem
