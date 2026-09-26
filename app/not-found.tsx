import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero label="404" title="Wrong turn." accent="Think bigger." intro="That page doesn’t exist.">
      <Button href="/">Back to home</Button>
    </PageHero>
  );
}
