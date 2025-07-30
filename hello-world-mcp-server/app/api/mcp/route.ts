	import { z } from 'zod';
	import { createMcpHandler } from 'mcp-handler';
	const handler = createMcpHandler(
	  (server) => {
	    server.tool(
	      'hello_world',
	      'A simple hello world tool',
	      { name: z.string().optional() },
	      async ({ name }) => {
	        const greeting = name ? `Hello, ${name}!` : 'Hello, World!';
	        return {
	          content: [{ type: 'text', text: greeting }],
	        };
	      },
	    );
	  },
	  {},
	  { basePath: '/api' },
	);
	export { handler as GET, handler as POST, handler as DELETE };