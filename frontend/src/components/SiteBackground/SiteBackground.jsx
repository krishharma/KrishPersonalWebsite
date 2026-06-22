import "./SiteBackground.css";

export default function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="site-background__grid" />
      <div className="site-background__orb site-background__orb--1" />
      <div className="site-background__orb site-background__orb--2" />
      <div className="site-background__orb site-background__orb--3" />
    </div>
  );
}
