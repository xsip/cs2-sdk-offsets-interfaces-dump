// generated - do not edit!

import {entity2_CEntityComponent} from '../entity2/CEntityComponent';
// Class size: 0x1B8
// BaseClass: : public CS2::entity2::CEntityComponent
export const server_CLightComponent  = {
	...entity2_CEntityComponent,
	__m_pChainEntity: 48n, // entity2::CNetworkVarChainer  | Schema_DeclaredClass | Size: 0x28
	m_Color: 109n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_SecondaryColor: 113n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flBrightness: 120n, // float32 m_flBrightness; |  0x78 | Schema_Builtin | Size: 0x4
	m_flBrightnessScale: 124n, // float32 m_flBrightnessScale; |  0x7c | Schema_Builtin | Size: 0x4
	m_flBrightnessMult: 128n, // float32 m_flBrightnessMult; |  0x80 | Schema_Builtin | Size: 0x4
	m_flRange: 132n, // float32 m_flRange; |  0x84 | Schema_Builtin | Size: 0x4
	m_flFalloff: 136n, // float32 m_flFalloff; |  0x88 | Schema_Builtin | Size: 0x4
	m_flAttenuation0: 140n, // float32 m_flAttenuation0; |  0x8c | Schema_Builtin | Size: 0x4
	m_flAttenuation1: 144n, // float32 m_flAttenuation1; |  0x90 | Schema_Builtin | Size: 0x4
	m_flAttenuation2: 148n, // float32 m_flAttenuation2; |  0x94 | Schema_Builtin | Size: 0x4
	m_flTheta: 152n, // float32 m_flTheta; |  0x98 | Schema_Builtin | Size: 0x4
	m_flPhi: 156n, // float32 m_flPhi; |  0x9c | Schema_Builtin | Size: 0x4
	m_hLightCookie: 160n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_nCascades: 168n, // int32_t m_nCascades; |  0xa8 | Schema_Builtin | Size: 0x4
	m_nCastShadows: 172n, // int32_t m_nCastShadows; |  0xac | Schema_Builtin | Size: 0x4
	m_nShadowWidth: 176n, // int32_t m_nShadowWidth; |  0xb0 | Schema_Builtin | Size: 0x4
	m_nShadowHeight: 180n, // int32_t m_nShadowHeight; |  0xb4 | Schema_Builtin | Size: 0x4
	m_bRenderDiffuse: 184n, // bool m_bRenderDiffuse; |  0xb8 | Schema_Builtin | Size: 0x1
	m_nRenderSpecular: 188n, // int32_t m_nRenderSpecular; |  0xbc | Schema_Builtin | Size: 0x4
	m_bRenderTransmissive: 192n, // bool m_bRenderTransmissive; |  0xc0 | Schema_Builtin | Size: 0x1
	m_flOrthoLightWidth: 196n, // float32 m_flOrthoLightWidth; |  0xc4 | Schema_Builtin | Size: 0x4
	m_flOrthoLightHeight: 200n, // float32 m_flOrthoLightHeight; |  0xc8 | Schema_Builtin | Size: 0x4
	m_nStyle: 204n, // int32_t m_nStyle; |  0xcc | Schema_Builtin | Size: 0x4
	m_Pattern: 208n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nCascadeRenderStaticObjects: 216n, // int32_t m_nCascadeRenderStaticObjects; |  0xd8 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeCrossFade: 220n, // float32 m_flShadowCascadeCrossFade; |  0xdc | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistanceFade: 224n, // float32 m_flShadowCascadeDistanceFade; |  0xe0 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance0: 228n, // float32 m_flShadowCascadeDistance0; |  0xe4 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance1: 232n, // float32 m_flShadowCascadeDistance1; |  0xe8 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance2: 236n, // float32 m_flShadowCascadeDistance2; |  0xec | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance3: 240n, // float32 m_flShadowCascadeDistance3; |  0xf0 | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution0: 244n, // int32_t m_nShadowCascadeResolution0; |  0xf4 | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution1: 248n, // int32_t m_nShadowCascadeResolution1; |  0xf8 | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution2: 252n, // int32_t m_nShadowCascadeResolution2; |  0xfc | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution3: 256n, // int32_t m_nShadowCascadeResolution3; |  0x100 | Schema_Builtin | Size: 0x4
	m_bUsesBakedShadowing: 260n, // bool m_bUsesBakedShadowing; |  0x104 | Schema_Builtin | Size: 0x1
	m_nShadowPriority: 264n, // int32_t m_nShadowPriority; |  0x108 | Schema_Builtin | Size: 0x4
	m_nBakedShadowIndex: 268n, // int32_t m_nBakedShadowIndex; |  0x10c | Schema_Builtin | Size: 0x4
	m_nLightPathUniqueId: 272n, // int32_t m_nLightPathUniqueId; |  0x110 | Schema_Builtin | Size: 0x4
	m_nLightMapUniqueId: 276n, // int32_t m_nLightMapUniqueId; |  0x114 | Schema_Builtin | Size: 0x4
	m_bRenderToCubemaps: 280n, // bool m_bRenderToCubemaps; |  0x118 | Schema_Builtin | Size: 0x1
	m_bAllowSSTGeneration: 281n, // bool m_bAllowSSTGeneration; |  0x119 | Schema_Builtin | Size: 0x1
	m_nDirectLight: 284n, // int32_t m_nDirectLight; |  0x11c | Schema_Builtin | Size: 0x4
	m_nIndirectLight: 288n, // int32_t m_nIndirectLight; |  0x120 | Schema_Builtin | Size: 0x4
	m_flFadeMinDist: 292n, // float32 m_flFadeMinDist; |  0x124 | Schema_Builtin | Size: 0x4
	m_flFadeMaxDist: 296n, // float32 m_flFadeMaxDist; |  0x128 | Schema_Builtin | Size: 0x4
	m_flShadowFadeMinDist: 300n, // float32 m_flShadowFadeMinDist; |  0x12c | Schema_Builtin | Size: 0x4
	m_flShadowFadeMaxDist: 304n, // float32 m_flShadowFadeMaxDist; |  0x130 | Schema_Builtin | Size: 0x4
	m_bEnabled: 308n, // bool m_bEnabled; |  0x134 | Schema_Builtin | Size: 0x1
	m_bFlicker: 309n, // bool m_bFlicker; |  0x135 | Schema_Builtin | Size: 0x1
	m_bPrecomputedFieldsValid: 310n, // bool m_bPrecomputedFieldsValid; |  0x136 | Schema_Builtin | Size: 0x1
	m_vPrecomputedBoundsMins: 312n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedBoundsMaxs: 324n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin: 336n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles: 348n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent: 360n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flPrecomputedMaxRange: 372n, // float32 m_flPrecomputedMaxRange; |  0x174 | Schema_Builtin | Size: 0x4
	m_nFogLightingMode: 376n, // int32_t m_nFogLightingMode; |  0x178 | Schema_Builtin | Size: 0x4
	m_flFogContributionStength: 380n, // float32 m_flFogContributionStength; |  0x17c | Schema_Builtin | Size: 0x4
	m_flNearClipPlane: 384n, // float32 m_flNearClipPlane; |  0x180 | Schema_Builtin | Size: 0x4
	m_SkyColor: 388n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flSkyIntensity: 392n, // float32 m_flSkyIntensity; |  0x188 | Schema_Builtin | Size: 0x4
	m_SkyAmbientBounce: 396n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bUseSecondaryColor: 400n, // bool m_bUseSecondaryColor; |  0x190 | Schema_Builtin | Size: 0x1
	m_bMixedShadows: 401n, // bool m_bMixedShadows; |  0x191 | Schema_Builtin | Size: 0x1
	m_flLightStyleStartTime: 404n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flCapsuleLength: 408n, // float32 m_flCapsuleLength; |  0x198 | Schema_Builtin | Size: 0x4
	m_flMinRoughness: 412n, // float32 m_flMinRoughness; |  0x19c | Schema_Builtin | Size: 0x4
	m_bPvsModifyEntity: 432n, // bool m_bPvsModifyEntity; |  0x1b0 | Schema_Builtin | Size: 0x1
}
