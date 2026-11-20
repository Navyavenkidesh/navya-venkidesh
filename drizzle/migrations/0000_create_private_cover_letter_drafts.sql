CREATE TABLE public.owner_cover_letter_drafts (
  user_id uuid PRIMARY KEY,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT cover_letter_owner_only CHECK (user_id = '40127c4d-e46f-4298-b625-6748a2276e00'::uuid)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.owner_cover_letter_drafts TO authenticated;
GRANT ALL ON public.owner_cover_letter_drafts TO service_role;
ALTER TABLE public.owner_cover_letter_drafts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner reads own letter" ON public.owner_cover_letter_drafts FOR SELECT TO authenticated USING (auth.uid() = user_id AND user_id = '40127c4d-e46f-4298-b625-6748a2276e00'::uuid);
CREATE POLICY "Owner creates own letter" ON public.owner_cover_letter_drafts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id AND user_id = '40127c4d-e46f-4298-b625-6748a2276e00'::uuid);
CREATE POLICY "Owner edits own letter" ON public.owner_cover_letter_drafts FOR UPDATE TO authenticated USING (auth.uid() = user_id AND user_id = '40127c4d-e46f-4298-b625-6748a2276e00'::uuid) WITH CHECK (auth.uid() = user_id AND user_id = '40127c4d-e46f-4298-b625-6748a2276e00'::uuid);
CREATE POLICY "Owner deletes own letter" ON public.owner_cover_letter_drafts FOR DELETE TO authenticated USING (auth.uid() = user_id AND user_id = '40127c4d-e46f-4298-b625-6748a2276e00'::uuid);