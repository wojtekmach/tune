sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"},{"group":"","headers":[{"anchor":"about","id":"About"},{"anchor":"usage","id":"Usage"},{"anchor":"development","id":"Development"},{"anchor":"deployment","id":"Deployment"},{"anchor":"credits","id":"Credits"},{"anchor":"code-of-conduct","id":"Code of Conduct"},{"anchor":"license","id":"License"}],"id":"readme","title":"Tune"}],"modules":[{"group":"Spotify Schemas","id":"Tune.Spotify.Schema","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:thumbnail_size/0","id":"thumbnail_size/0"},{"anchor":"t:thumbnails/0","id":"thumbnails/0"},{"anchor":"t:uri/0","id":"uri/0"}]}],"sections":[],"title":"Tune.Spotify.Schema"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Album","nested_context":"Tune.Spotify.Schema","nested_title":"Album","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:album_type/0","id":"album_type/0"},{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"from_tracks/1","id":"from_tracks/1"},{"anchor":"grouped_tracks/1","id":"grouped_tracks/1"},{"anchor":"has_multiple_discs?/1","id":"has_multiple_discs?/1"},{"anchor":"main_artist/1","id":"main_artist/1"},{"anchor":"release_year/1","id":"release_year/1"},{"anchor":"total_duration_ms/1","id":"total_duration_ms/1"},{"anchor":"tracks_count/1","id":"tracks_count/1"}]}],"sections":[],"title":"Tune.Spotify.Schema.Album"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Artist","nested_context":"Tune.Spotify.Schema","nested_title":"Artist","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Tune.Spotify.Schema.Artist"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Device","nested_context":"Tune.Spotify.Schema","nested_title":"Device","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:t/0","id":"t/0"},{"anchor":"t:volume_percent/0","id":"volume_percent/0"}]}],"sections":[],"title":"Tune.Spotify.Schema.Device"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Episode","nested_context":"Tune.Spotify.Schema","nested_title":"Episode","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Tune.Spotify.Schema.Episode"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Player","nested_context":"Tune.Spotify.Schema","nested_title":"Player","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:prop/0","id":"prop/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"changes/2","id":"changes/2"}]}],"sections":[],"title":"Tune.Spotify.Schema.Player"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Playlist","nested_context":"Tune.Spotify.Schema","nested_title":"Playlist","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"albums_grouped_by_type/1","id":"albums_grouped_by_type/1"},{"anchor":"total_duration_ms/1","id":"total_duration_ms/1"},{"anchor":"tracks_count/1","id":"tracks_count/1"}]}],"sections":[],"title":"Tune.Spotify.Schema.Playlist"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Publisher","nested_context":"Tune.Spotify.Schema","nested_title":"Publisher","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Tune.Spotify.Schema.Publisher"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Show","nested_context":"Tune.Spotify.Schema","nested_title":"Show","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Tune.Spotify.Schema.Show"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.Track","nested_context":"Tune.Spotify.Schema","nested_title":"Track","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"artist_ids/1","id":"artist_ids/1"}]}],"sections":[],"title":"Tune.Spotify.Schema.Track"},{"group":"Spotify Schemas","id":"Tune.Spotify.Schema.User","nested_context":"Tune.Spotify.Schema","nested_title":"User","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"premium?/1","id":"premium?/1"}]}],"sections":[],"title":"Tune.Spotify.Schema.User"},{"group":"Spotify Session","id":"Tune.Spotify.Session","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:context_uri/0","id":"context_uri/0"},{"anchor":"t:credentials/0","id":"credentials/0"},{"anchor":"t:id/0","id":"id/0"},{"anchor":"t:item_id/0","id":"item_id/0"},{"anchor":"t:message/0","id":"message/0"},{"anchor":"t:player_token/0","id":"player_token/0"},{"anchor":"t:uri/0","id":"uri/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:broadcast/2","id":"broadcast/2"},{"anchor":"c:get_album/2","id":"get_album/2"},{"anchor":"c:get_artist/2","id":"get_artist/2"},{"anchor":"c:get_artist_albums/3","id":"get_artist_albums/3"},{"anchor":"c:get_devices/1","id":"get_devices/1"},{"anchor":"c:get_episodes/2","id":"get_episodes/2"},{"anchor":"c:get_player_token/1","id":"get_player_token/1"},{"anchor":"c:get_playlist/2","id":"get_playlist/2"},{"anchor":"c:get_profile/1","id":"get_profile/1"},{"anchor":"c:get_recommendations_from_artists/2","id":"get_recommendations_from_artists/2"},{"anchor":"c:get_show/2","id":"get_show/2"},{"anchor":"c:next/1","id":"next/1"},{"anchor":"c:now_playing/1","id":"now_playing/1"},{"anchor":"c:play/2","id":"play/2"},{"anchor":"c:play/3","id":"play/3"},{"anchor":"c:prev/1","id":"prev/1"},{"anchor":"c:recently_played_tracks/2","id":"recently_played_tracks/2"},{"anchor":"c:refresh_devices/1","id":"refresh_devices/1"},{"anchor":"c:search/3","id":"search/3"},{"anchor":"c:seek/2","id":"seek/2"},{"anchor":"c:set_volume/2","id":"set_volume/2"},{"anchor":"c:setup/2","id":"setup/2"},{"anchor":"c:subscribe/1","id":"subscribe/1"},{"anchor":"c:toggle_play/1","id":"toggle_play/1"},{"anchor":"c:top_tracks/2","id":"top_tracks/2"},{"anchor":"c:transfer_playback/2","id":"transfer_playback/2"}]}],"sections":[],"title":"Tune.Spotify.Session"},{"group":"Spotify Session","id":"Tune.Spotify.Session.HTTP","nested_context":"Tune.Spotify.Session","nested_title":"HTTP","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:start_opts/0","id":"start_opts/0"},{"anchor":"t:timeouts/0","id":"timeouts/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"},{"anchor":"start_link/3","id":"start_link/3"}]}],"sections":[{"anchor":"module-general-structure","id":"General structure"},{"anchor":"module-data-lifecycle","id":"Data lifecycle"},{"anchor":"module-subscriptions","id":"Subscriptions"}],"title":"Tune.Spotify.Session.HTTP"},{"group":"Spotify Client API","id":"Tune.Spotify.Client","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:item_type/0","id":"item_type/0"},{"anchor":"t:pagination_option/0","id":"pagination_option/0"},{"anchor":"t:pagination_options/0","id":"pagination_options/0"},{"anchor":"t:q/0","id":"q/0"},{"anchor":"t:recently_played_tracks_options/0","id":"recently_played_tracks_options/0"},{"anchor":"t:search_options/0","id":"search_options/0"},{"anchor":"t:search_results/0","id":"search_results/0"},{"anchor":"t:token/0","id":"token/0"},{"anchor":"t:top_tracks_options/0","id":"top_tracks_options/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:get_album/2","id":"get_album/2"},{"anchor":"c:get_artist/2","id":"get_artist/2"},{"anchor":"c:get_artist_albums/3","id":"get_artist_albums/3"},{"anchor":"c:get_devices/1","id":"get_devices/1"},{"anchor":"c:get_episodes/2","id":"get_episodes/2"},{"anchor":"c:get_playlist/2","id":"get_playlist/2"},{"anchor":"c:get_profile/1","id":"get_profile/1"},{"anchor":"c:get_recommendations_from_artists/2","id":"get_recommendations_from_artists/2"},{"anchor":"c:get_show/2","id":"get_show/2"},{"anchor":"c:get_token/1","id":"get_token/1"},{"anchor":"c:next/1","id":"next/1"},{"anchor":"c:now_playing/1","id":"now_playing/1"},{"anchor":"c:pause/1","id":"pause/1"},{"anchor":"c:play/1","id":"play/1"},{"anchor":"c:play/2","id":"play/2"},{"anchor":"c:play/3","id":"play/3"},{"anchor":"c:prev/1","id":"prev/1"},{"anchor":"c:recently_played_tracks/2","id":"recently_played_tracks/2"},{"anchor":"c:search/3","id":"search/3"},{"anchor":"c:seek/2","id":"seek/2"},{"anchor":"c:set_volume/2","id":"set_volume/2"},{"anchor":"c:top_tracks/2","id":"top_tracks/2"},{"anchor":"c:transfer_playback/2","id":"transfer_playback/2"}]}],"sections":[],"title":"Tune.Spotify.Client"},{"group":"Spotify Client API","id":"Tune.Spotify.Client.HTTP","nested_context":"Tune.Spotify.Client","nested_title":"HTTP","sections":[],"title":"Tune.Spotify.Client.HTTP"},{"group":"Authentication","id":"Tune.Auth","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:http_session/0","id":"http_session/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"load_user/1","id":"load_user/1"}]}],"sections":[],"title":"Tune.Auth"},{"group":"Authentication","id":"TuneWeb.AuthController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"callback/2","id":"callback/2"},{"anchor":"delete/2","id":"delete/2"},{"anchor":"ensure_authenticated/2","id":"ensure_authenticated/2"},{"anchor":"new/2","id":"new/2"}]}],"sections":[],"title":"TuneWeb.AuthController"},{"group":"Authentication","id":"TuneWeb.AuthView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0"},{"anchor":"render/2","id":"render/2"},{"anchor":"template_not_found/2","id":"template_not_found/2"}]}],"sections":[],"title":"TuneWeb.AuthView"},{"group":"UI","id":"TuneWeb.ExplorerLive","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"render/1","id":"render/1"}]}],"sections":[{"anchor":"module-mounting-and-authentication","id":"Mounting and authentication"},{"anchor":"module-routing","id":"Routing"},{"anchor":"module-events","id":"Events"}],"title":"TuneWeb.ExplorerLive"},{"group":"Routing","id":"TuneWeb.Router.Helpers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"auth_path/2","id":"auth_path/2"},{"anchor":"auth_path/3","id":"auth_path/3"},{"anchor":"auth_path/4","id":"auth_path/4"},{"anchor":"auth_url/2","id":"auth_url/2"},{"anchor":"auth_url/3","id":"auth_url/3"},{"anchor":"auth_url/4","id":"auth_url/4"},{"anchor":"explorer_path/2","id":"explorer_path/2"},{"anchor":"explorer_path/3","id":"explorer_path/3"},{"anchor":"explorer_path/4","id":"explorer_path/4"},{"anchor":"explorer_url/2","id":"explorer_url/2"},{"anchor":"explorer_url/3","id":"explorer_url/3"},{"anchor":"explorer_url/4","id":"explorer_url/4"},{"anchor":"live_dashboard_path/2","id":"live_dashboard_path/2"},{"anchor":"live_dashboard_path/3","id":"live_dashboard_path/3"},{"anchor":"live_dashboard_path/4","id":"live_dashboard_path/4"},{"anchor":"live_dashboard_path/5","id":"live_dashboard_path/5"},{"anchor":"live_dashboard_url/2","id":"live_dashboard_url/2"},{"anchor":"live_dashboard_url/3","id":"live_dashboard_url/3"},{"anchor":"live_dashboard_url/4","id":"live_dashboard_url/4"},{"anchor":"live_dashboard_url/5","id":"live_dashboard_url/5"},{"anchor":"path/2","id":"path/2"},{"anchor":"static_integrity/2","id":"static_integrity/2"},{"anchor":"static_path/2","id":"static_path/2"},{"anchor":"static_url/2","id":"static_url/2"},{"anchor":"url/1","id":"url/1"}]}],"sections":[],"title":"TuneWeb.Router.Helpers"},{"group":"Core","id":"Tune.Config","sections":[],"title":"Tune.Config"},{"group":"Core","id":"Tune.Duration","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:milliseconds/0","id":"milliseconds/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"hms/1","id":"hms/1"},{"anchor":"human/1","id":"human/1"}]}],"sections":[],"title":"Tune.Duration"},{"group":"Core","id":"Tune.Gettext","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"dgettext/3","id":"dgettext/3"},{"anchor":"dgettext_noop/2","id":"dgettext_noop/2"},{"anchor":"dngettext/5","id":"dngettext/5"},{"anchor":"dngettext_noop/3","id":"dngettext_noop/3"},{"anchor":"dpgettext/4","id":"dpgettext/4"},{"anchor":"dpgettext_noop/3","id":"dpgettext_noop/3"},{"anchor":"dpngettext/6","id":"dpngettext/6"},{"anchor":"dpngettext_noop/4","id":"dpngettext_noop/4"},{"anchor":"gettext/2","id":"gettext/2"},{"anchor":"gettext_comment/1","id":"gettext_comment/1"},{"anchor":"gettext_noop/1","id":"gettext_noop/1"},{"anchor":"handle_missing_bindings/2","id":"handle_missing_bindings/2"},{"anchor":"handle_missing_plural_translation/6","id":"handle_missing_plural_translation/6"},{"anchor":"handle_missing_translation/4","id":"handle_missing_translation/4"},{"anchor":"lgettext/5","id":"lgettext/5"},{"anchor":"lngettext/7","id":"lngettext/7"},{"anchor":"ngettext/4","id":"ngettext/4"},{"anchor":"ngettext_noop/2","id":"ngettext_noop/2"},{"anchor":"pgettext/3","id":"pgettext/3"},{"anchor":"pgettext_noop/2","id":"pgettext_noop/2"},{"anchor":"pngettext/5","id":"pngettext/5"},{"anchor":"pngettext_noop/3","id":"pngettext_noop/3"}]}],"sections":[],"title":"Tune.Gettext"}],"tasks":[]}