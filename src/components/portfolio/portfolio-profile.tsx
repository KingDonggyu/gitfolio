import Link from 'next/link';
import { User } from 'user';

export const PortfolioProfile = ({ username, email, links, introduce, githubUrl }: User) => {
  const linksWithGitHub: typeof links = [{ label: 'GitHub', url: githubUrl }, ...links];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-[24px]">{username}</h1>
      <div className="mb-[24px]">
        {email && (
          <div className="flex leading-relaxed">
            <span className="text-muted-foreground">이메일</span>
            <span className="ml-[10px]">{email}</span>
          </div>
        )}
        {linksWithGitHub.map(({ label, url }) => (
          <div key={url} className="flex leading-relaxed">
            <span className="text-muted-foreground">{label}</span>
            <Link href={url} target="_blank" className="ml-[10px]">
              {url}
            </Link>
          </div>
        ))}
      </div>
      <p className="whitespace-pre-line break-all">{introduce}</p>
    </div>
  );
};
