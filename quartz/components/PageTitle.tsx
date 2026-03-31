import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href="https://danhelo.com">
        danhelo<span class="page-title-dot">.</span>
      </a>
      <a href={baseDir} class="page-title-section">thoughts</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  display: flex;
  align-items: baseline;
  gap: 0.15rem;
}
.page-title a {
  color: var(--dark);
  text-decoration: none;
}
.page-title-dot {
  color: var(--secondary);
}
.page-title-section {
  font-size: 1rem;
  font-family: var(--bodyFont);
  color: var(--gray) !important;
  margin-left: 0.35rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.page-title-section:hover {
  color: var(--secondary) !important;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
