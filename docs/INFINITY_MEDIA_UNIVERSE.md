# Infinity Synapses — Media Universe

Infinity Synapses is the adaptive media scanner for Infinity. It should combine music, shortwave-style discovery, internet radio, video, television, live streams, creator channels, and licensed media partners inside one fashionable mobile-first interface.

## Core interaction

The Synapse wheel spins across approved media sources and lands on a playable item. A result can be a song, station, shortwave stream, television channel, video, live broadcast, creator page, documentary, game scene, or Infinity-produced program.

The wheel is not random-only. It combines exploration with a private relevance score based on current context, recent interests, unfinished viewing, followed creators, time of day, language, user controls, and diversity. Users can always choose pure random, local-only, live-only, music-only, television-only, or a named source.

## Soacebook recovery

Soacebook is preserved here as the cross-platform live-video aggregation module. It does not scrape or rehost media without permission. It uses official APIs, approved embeds, licensed feeds, creator submissions, RSS/Atom where provided, and direct Infinity-hosted media.

Each provider is implemented through a separate adapter. An adapter declares:

- provider ID and branding requirements
- supported discovery, search, profile, playlist, live, and playback capabilities
- authentication requirements
- quota and caching rules
- whether playback is embedded, linked, or Infinity-hosted
- view-count and analytics limitations
- advertising and monetization rules
- privacy and deletion requirements
- current operational status

A provider failure must not break the whole application.

## Required source classes

1. Infinity-hosted music, video, television, radio, games, and creator uploads
2. Licensed partner channels and catalogs
3. Internet radio and approved streaming directories
4. Shortwave and software-defined-radio directories where streams and rights permit
5. YouTube through official data APIs and embedded players
6. TikTok through approved Display APIs, creator authorization, oEmbed, and embed players
7. Podcasts through RSS
8. Public-service and creator feeds with explicit embedding or syndication permission
9. User-added links that remain links unless embedding is authorized

## Shortwave mode

Shortwave mode should feel like a contemporary receiver rather than a fake frequency list. It includes:

- world map and day/night propagation layer
- station directory
- language, country, band, and program filters
- live and scheduled broadcast indicators
- signal history supplied by users or approved data sources
- favorites and recordings only where permitted
- scan, fine tune, lock, skip, and identify controls
- station attribution and source health
- an educational explanation that browser playback is an internet relay unless actual radio hardware is attached

## Fashion and interface

The application should open into a clean full-screen media card with five primary actions:

1. Spin
2. Live
3. Music
4. TV and Video
5. More

The first four actions can be re-ranked by the Infinity relevance engine. More remains fixed. The player persists while the user navigates. Every screen supports swipe, remote-control, keyboard, and touch use.

Visual direction:

- premium dark glass and broadcast typography
- large artwork and video
- restrained animation
- clear provider attribution
- no fake signal, earnings, or audience numbers
- phone, tablet, desktop, television, and car-safe layouts
- accessible captions, transcripts, contrast, and reduced-motion settings

## View and value accounting

Infinity records a private observed-view event when playback begins and a verified-view event only when provider rules and measurable playback thresholds allow it. Provider-reported views remain provider metrics. Infinity must not claim that an embedded play generated revenue unless a contract or verified settlement event says so.

Possible value paths:

- Infinity-hosted advertising
- licensed partner advertising
- creator subscriptions and tips
- sponsorships
- commerce and coupons
- paid channels or events
- Infinity rewards funded by disclosed revenue or program rules

A platform such as YouTube or TikTok does not automatically owe Infinity money for an embed. Advertising and revenue-sharing require their approved programs or a separate agreement.

## Privacy and security

- encrypted user profile, history, follows, recommendations, and private playlists
- provider OAuth tokens held server-side and encrypted
- no provider secrets in browser code
- explicit account linking and revocation
- minimal scopes
- signed analytics events
- append-only settlement records
- deletion and export controls
- child-safety, mature-content, and regional controls

## Technical architecture

```text
Infinity Index
  -> Synapses shell
      -> Relevance and diversity engine
      -> Universal media manifest
      -> Provider adapter registry
      -> Persistent player
      -> Shortwave receiver module
      -> Soacebook live-video module
      -> TV guide and channel module
      -> Music and radio module
      -> Infinity-hosted media service
      -> Encrypted profile and history
      -> Git Coin action/provenance stream
      -> Verified revenue and reward ledger
```

The universal media manifest normalizes only common discovery fields. Provider-specific information remains namespaced so Infinity does not erase attribution or violate platform rules.

## First implementation milestone

1. Audit the existing Next.js application and make the current spin flow build and run.
2. Replace placeholder catalog entries with an adapter interface and a local demonstration catalog.
3. Build the persistent media player.
4. Add Music, Live, TV and Video, Shortwave, and More routes.
5. Implement official YouTube embed support without hiding branding or interfering with provider ads.
6. Implement TikTok oEmbed as a separate adapter.
7. Add encrypted local profile history, then migrate to the Infinity vault service.
8. Add provider-health diagnostics and visible error states.
9. Add Soacebook as a saved cross-platform feed assembled from approved sources.
10. Add verified view-event states without promising payment.

## Naming

- Infinity Synapses: adaptive scanner and media application
- Soacebook: cross-platform live-video and creator-feed module
- Git Coin: verified action, contribution, or produced-asset record
- Infinity: any separately governed value or reward

These names must not be presented as Bitcoin or as guaranteed currency.