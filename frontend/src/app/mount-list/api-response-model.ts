export interface MountApiResponse {
  data: { _links: {
            self: {
             href: string;
            }
        },
          mounts: [{
            mount: {
              key: {
                href: "string"
              },
              name: string;
              id: number;
            },
            is_useable: boolean,
            is_favorite?: boolean,
            is_character_specific?: boolean,
          }]
        };
}
