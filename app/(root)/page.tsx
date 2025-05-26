import Image from "next/image";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
export default function Home() {
  const loggedIn={firstName:'rayen'}
  return (
    <section className="home">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox 
          type="greeting" 
          title="Welcome "
          user={loggedIn?.firstName ||'Rayen'}
          subtext="Your personal banking systeme"
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1220}
           />

        </header>

      </div>
    </section>
    

    
      
  );
}
