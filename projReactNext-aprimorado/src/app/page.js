import { ParamCard, ParamList } from './components/parametro';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="container mx-auto p-8">
        <div className="rounded-lg p-8 bg-white dark:bg-gray-800 shadow">
          <h2 className="text-2xl font-bold mb-2">Bem-vindo ao Meu App</h2>
          <p className="mb-4">Aqui você encontra funcionalidades de autenticação, tema e componentes reutilizáveis.</p>
        </div>
      </section>

      <section className="container mx-auto p-8 grid gap-4 md:grid-cols-3">
        <ParamCard
          title="Funcionalidade A"
          description="Descrição curta da funcionalidade A."
          extra="Detalhes extras sobre a funcionalidade A. Pode conter links, instruções, etc."
        />
        <ParamCard
          title="Funcionalidade B"
          description="Descrição curta da funcionalidade B."
          extra="Detalhes extras sobre a funcionalidade B."
        />
        <ParamCard
          title="Funcionalidade C"
          description="Descrição curta da funcionalidade C."
          extra="Detalhes extras sobre a funcionalidade C."
        />
      </section>

      <section className="container mx-auto p-8">
        <h3 className="text-xl font-semibold mb-3">Recursos / Contato</h3>
        <ParamList items={[
          'Como usar o login',
          'Como alternar tema',
          'Documentação',
          'Contato: contato@seudominio.com'
        ]} />
      </section>
    </main>
  );
}
