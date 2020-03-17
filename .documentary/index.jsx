/**
 * The footer for documentation.
 */
export const footer = () => {
  const alt = 'a-la'
  const src = 'https://avatars1.githubusercontent.com/u/41520309?v=4&s=100'
  const href = 'https://alamode.cc'
  const org = 'À La Mode'
  const year = new Date().getFullYear()
  return [
    (<table>
      <tr>
        <td>
          <img src={src} alt={alt} />
        </td>
        <td>
          © <a href={href}>{org}</a> {year}
        </td>
      </tr>
    </table>),
  ]
}