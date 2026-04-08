const Footer = () => {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xl font-extrabold tracking-tight">
              <span className="text-gradient">WPXPO</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Custom WordPress & WooCommerce Development
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} WPXPO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
