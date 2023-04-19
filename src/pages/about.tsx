import { MainLayout, MetaTag } from '@/components';

import type { NextPageWithLayout } from '../models/common';

const About: NextPageWithLayout = () => (
  <div>
    <MetaTag title="Lorem ipsum" description="Lorem ipsum" />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </div>
);
About.Layout = MainLayout;
export default About;
