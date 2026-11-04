import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "@/lib/modules";
import ModuleWorkspace from "@/components/ModuleWorkspace";
export function generateStaticParams() { return modules.map((m) => ({ slug: m.slug })); }
export default function ModulePage({ params }: { params: { slug: string } }) {
 const module = modules.find((m) => m.slug === params.slug);
 if (!module) notFound();
 return <main className="container module-page"><Link href="/" className="back-link">← All learning modules</Link><section className="module-hero"><div className="module-icon">{module.icon}</div><div><div className="eyebrow">{module.level.toUpperCase()} LEARNING PATH</div><h1>{module.title}</h1><p>{module.description}</p></div></section><div className="module-layout"><section className="topic-list"><div className="section-heading"><div><div className="eyebrow">LESSON CONTENT</div><h2>Explore the topics</h2></div><span className="count">{module.topics.length} topics</span></div>{module.topics.map((t,i)=><article className="topic-card" key={t.title}><div className="topic-number">{String(i+1).padStart(2,"0")}</div><div><h3>{t.title}</h3><p>{t.description}</p><div className="formula">{t.formula}</div></div></article>)}</section><aside className="side-panel"><div className="eyebrow">LEARNING TIP</div><h3>Understand the idea first.</h3><p>Write down the known values, identify the quantity you need, choose the relevant relationship, then check that your answer has the right unit.</p><div className="tip-line"/><h3>Suggested study routine</h3><ol><li>Read each topic.</li><li>Write the key formula.</li><li>Try changing calculator inputs.</li><li>Explain the result in your own words.</li></ol></aside></div><ModuleWorkspace slug={module.slug} title={module.title}/></main>;
}
