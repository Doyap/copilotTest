/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zEaffp8O6b0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-gray-400" />
          <h1 className="text-xl">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Input className="rounded-md bg-[#161b22] border border-gray-700 text-white" placeholder="Type to search" />
          <Button className="bg-blue-500 hover:bg-blue-600">Send feedback</Button>
          <div className="flex items-center space-x-2">
            <UserIcon className="text-gray-400" />
            <span className="text-sm">Username</span>
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="w-60 p-4 space-y-6 border-r border-gray-700">
          <div className="space-y-2">
            <Input className="rounded-md bg-[#161b22] border border-gray-700 text-white" placeholder="Find a repository..." />
            <Button variant="secondary">New</Button>
          </div>
          <nav className="space-y-1">
            <Link className="block" href="#">
              Doyap/Beakjoon
            </Link>
            <Link className="block" href="#">
              Doyap/copilotTest
            </Link>
            <Link className="block" href="#">
              Doyap/vechain
            </Link>
            <Link className="block" href="#">
              Doyap/vue_study
            </Link>
            <Link className="block" href="#">
              Doyap/git-practice
            </Link>
            <Link className="block" href="#">
              Doyap/git-for-everyone
            </Link>
            <Link className="block" href="#">
              nadelshin/ta_project
            </Link>
            <Link className="block" href="#">
              Show more
            </Link>
          </nav>
          <div>
            <p className="text-sm">Recent activity</p>
            <p className="text-xs text-gray-400">When you take actions across GitHub, we'll provide links to that activity here.</p>
          </div>
        </aside>
        <main className="flex-1 p-4">
          <section className="mb-6">
            <h2 className="text-lg mb-2">Home</h2>
            <div className="bg-[#161b22] p-4 rounded-md">
              <h3 className="text-sm mb-2">Updates to your homepage feed</h3>
              <p className="text-xs text-gray-400 mb-4">
                We've combined the power of the Following feed with the For you feed so there's one place to discover content on GitHub. There's improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design.{" "}
                <a className="text-blue-500" href="#">
                  Learn more
                </a>
              </p>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm">
                  Trending repositories{" "}
                  <a className="text-blue-500" href="#">
                    See more
                  </a>
                </h4>
                <MoreHorizontalIcon className="text-gray-400" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <a className="text-sm" href="#">
                      allenai/OLMo
                    </a>
                    <p className="text-xs text-gray-400">Modeling, training, eval, and inference code for OLMo</p>
                  </div>
                  <Button variant="ghost">
                    <StarIcon className="text-gray-400 mr-2" />
                    Star
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <a className="text-sm" href="#">
                      maybe-finance/maybe
                    </a>
                    <p className="text-xs text-gray-400">The OS for your personal finances</p>
                  </div>
                  <Button variant="ghost">
                    <StarIcon className="text-gray-400 mr-2" />
                    Star
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="flex justify-between space-x-4">
            <div className="w-1/2 p-4 bg-[#161b22] rounded-md">
              <h3 className="text-sm mb-4">Latest changes</h3>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>3 days ago</li>
                <li>Gradle starter workflows now automatically submit transitive dependencies</li>
                <li>5 days ago</li>
                <li>Code faster and better with GitHub Copilot's new features in Visual Studio</li>
                <li>5 days ago</li>
                <li>GitHub Actions: macOS 14 (Sonoma) is now available</li>
                <li>5 days ago</li>
                <li>GitHub Actions: Introducing the new M1 macOS runner available to open source!</li>
                <li>
                  <a className="text-blue-500" href="#">
                    View changelog —
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 p-4 bg-[#161b22] rounded-md">
              <h3 className="text-sm mb-4">Explore repositories</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <a className="text-sm" href="#">
                      impress-org/givewp
                    </a>
                    <p className="text-xs text-gray-400">GiveWP - The #1 Donation Plugin for WordPress. Easily accept donations and fundraise using your WordPress website.</p>
                  </div>
                  <Button variant="ghost">
                    <StarIcon className="text-gray-400 mr-2" />
                    Star
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <a className="text-sm" href="#">
                      wso2/product-is
                    </a>
                    <p className="text-xs text-gray-400">Welcome to the WSO2 Identity Server source code! For info on working with the WSO2 Identity Server repository and contributing code, click the link below.</p>
                  </div>
                  <Button variant="ghost">
                    <StarIcon className="text-gray-400 mr-2" />
                    Star
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <a className="text-sm" href="#">
                      miskey-dev/miskey
                    </a>
                    <p className="text-xs text-gray-400">An interplanetary microblogging platform 🚀</p>
                  </div>
                  <Button variant="ghost">
                    <StarIcon className="text-gray-400 mr-2" />
                    Star
                  </Button>
                </div>
                <a className="text-blue-500 text-xs" href="#">
                  Explore more —
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="p-4 border-t border-gray-700 text-xs text-gray-400">
        <div className="flex justify-between">
          <span>© 2024 GitHub, Inc.</span>
          <div className="space-x-2">
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Security
            </a>
            <a className="hover:text-white" href="#">
              Status
            </a>
            <a className="hover:text-white" href="#">
              Docs
            </a>
            <a className="hover:text-white" href="#">
              Contact
            </a>
            <a className="hover:text-white" href="#">
              Manage cookies
            </a>
            <a className="hover:text-white" href="#">
              Do not share my personal information
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
