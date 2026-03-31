import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-wrap")}>
      <a href={baseDir} class="page-title-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Minimal botanical/neural motif */}
          <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.9" />
          <circle cx="24" cy="10" r="1.8" fill="currentColor" opacity="0.5" />
          <circle cx="36" cy="18" r="1.8" fill="currentColor" opacity="0.5" />
          <circle cx="36" cy="32" r="1.8" fill="currentColor" opacity="0.5" />
          <circle cx="24" cy="40" r="1.8" fill="currentColor" opacity="0.5" />
          <circle cx="12" cy="32" r="1.8" fill="currentColor" opacity="0.5" />
          <circle cx="12" cy="18" r="1.8" fill="currentColor" opacity="0.5" />
          <line x1="24" y1="21" x2="24" y2="12" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
          <line x1="26.5" y1="22" x2="34.5" y2="18" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
          <line x1="26.5" y1="26" x2="34.5" y2="32" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
          <line x1="24" y1="27" x2="24" y2="38" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
          <line x1="21.5" y1="26" x2="13.5" y2="32" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
          <line x1="21.5" y1="22" x2="13.5" y2="18" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
          {/* Outer ring */}
          <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="0.5" opacity="0.15" />
        </svg>
      </a>
      <h2 class="page-title">
        <a href="https://danhelo.com">
          danhelo<span class="page-title-dot">.</span>
        </a>
        <a href={baseDir} class="page-title-section">thoughts</a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.page-title-mark {
  color: var(--secondary);
  opacity: 0.7;
  transition: opacity 300ms ease, color 300ms ease;
  display: flex;
  flex-shrink: 0;
}
.page-title-mark:hover {
  opacity: 1;
  color: var(--tertiary);
}
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
@media (max-width: 800px) {
  .page-title-mark svg {
    width: 28px;
    height: 28px;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
