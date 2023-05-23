import React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useLoaderData, redirect } from "react-router-dom";
import { Box, List, ListItem, Typography } from "@mui/material";

function Layout() {
  return (
    <Box>
      <Typography variant="h1" sx={{ color: t => t.palette.primary.main }}>
        Data Router Server Rendering Example
      </Typography>

      <Typography>
        If you check out the HTML source of this page, you'll notice that it already contains the HTML markup of the app
        that was sent from the server, and all the loader data was pre-fetched!
      </Typography>

      <Typography>
        This is great for search engines that need to index this page. It's also great for users because server-rendered
        pages tend to load more quickly on mobile devices and over slow networks.
      </Typography>

      <Typography>
        Another thing to notice is that when you click one of the links below and navigate to a different URL, then hit
        the refresh button on your browser, the server is able to generate the HTML markup for that page as well because
        you're using React Router on the server. This creates a seamless experience both for your users navigating
        around your site and for developers on your team who get to use the same routing library in both places.
      </Typography>

      <nav>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard">Dashboard</Link>
          </ListItem>
          <ListItem>
            <Link to="/lazy">Lazy</Link>
          </ListItem>
          <ListItem>
            <Link to="/redirect">Redirect to Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/nothing-here">Nothing Here</Link>
          </ListItem>
        </List>
      </nav>

      <hr />

      <Outlet />
    </Box>
  );
}

const sleep = (n = 500) => new Promise(r => setTimeout(r, n));
const rand = () => Math.round(Math.random() * 100);

async function homeLoader() {
  await sleep();
  return { data: `Home loader - random value ${rand()}` };
}

function Home() {
  let data: any = useLoaderData();
  return (
    <div>
      <h2>Home</h2>
      <p>Loader Data: {data.data}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

async function dashboardLoader() {
  await sleep();
  return { data: `Dashboard loader - random value ${rand()}` };
}

function Dashboard() {
  let data: any = useLoaderData();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Loader Data: {data.data}</p>
    </div>
  );
}

async function redirectLoader() {
  await sleep();
  return redirect("/");
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        loader: dashboardLoader,
        element: <Dashboard />,
      },
      {
        path: "redirect",
        loader: redirectLoader,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];
