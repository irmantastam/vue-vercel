import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import Facebook from '@icons/facebook.svg';
import Github from '@icons/github.svg';
import Instagram from '@icons/instagram.svg';
import Linkedin from '@icons/linkedin.svg';
import Quora from '@icons/quora.svg';
import Resume from '@icons/resume.svg';
import Stackshare from '@icons/stackshare.svg';
import { ArticleHero, ArticleImage, ArticleContent } from '@src/components/features/article';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const page = useContentfulLiveUpdates(props.page);

  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(resolvedTheme || '');
  }, [resolvedTheme]);

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}

      {page.featuredBlogPost && (
        <Container className="mb-8 p-0">
          <Link href={`/blog/${page.featuredBlogPost.slug}`}>
            <ArticleHero article={page.featuredBlogPost} />
          </Link>
        </Container>
      )}

      <Container className="mx-auto max-w-xl p-0 text-center">
        {page.image && (
          <Container className="mb-8 max-w-xs p-0">
            <ArticleImage
              image={page.image}
              className="aspect-square rounded-full border-none object-cover"
            />
          </Container>
        )}

        {page.greeting && (
          <Container className="mb-4 p-0">
            <h1>{page.greeting}</h1>
          </Container>
        )}

        {page.content && (
          <Container className="mb-10 max-w-xs p-0 [&_p]:my-2 [&_b]:font-semibold">
            <ArticleContent article={page} />
          </Container>
        )}

        <Container className="p-0">
          <h3 className="mb-2">{t('landingPage.reachMe')}</h3>
          <ul className="mb-10 flex flex-wrap justify-center gap-1">
            <li>
              <a
                href="https://www.linkedin.com/in/irmantas-tama%C5%A1auskas-6589272a6"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="transition-transform hover:-translate-y-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/irmantastam"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <Github
                  fill={theme === 'dark' ? '#b5b5b5' : undefined}
                  className="transition-transform hover:-translate-y-0.5"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/irmantas.tamasauskas.73"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <Facebook className="transition-transform hover:-translate-y-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/irmantastamasauskas"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <Instagram className="transition-transform hover:-translate-y-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.quora.com/profile/Irmantas-Tama%C5%A1auskas"
                target="_blank"
                rel="noopener noreferrer"
                title="Quora"
              >
                <Quora className="transition-transform hover:-translate-y-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://stackshare.io/irmantastam/my-stack"
                target="_blank"
                rel="noopener noreferrer"
                title="Stackshare"
              >
                <Stackshare className="transition-transform hover:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </Container>

        <Container className="mb-4 p-0">
          <a
            href="/resume"
            target="_blank"
            rel="noopener"
            title="Irmantas Tamašauskas Resume"
            className="inline-flex items-center gap-2 font-semibold hover:underline"
          >
            <Resume /> {t('landingPage.readCv')}
          </a>
        </Container>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    if (!page) {
      return {
        revalidate: revalidateDuration,
        notFound: true,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
      },
    };
  } catch {
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default Page;
