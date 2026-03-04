// generated - do not edit!

import {entity2_CEntityComponent} from '../entity2/CEntityComponent';
// Class size: 0x1F0
// BaseClass: : public CS2::entity2::CEntityComponent
export const client_CLightComponent  = {
	...entity2_CEntityComponent,
	__m_pChainEntity: 56n, // entity2::CNetworkVarChainer  | Schema_DeclaredClass | Size: 0x28
	m_Color: 117n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_SecondaryColor: 121n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flBrightness: 128n, // float32 m_flBrightness; |  0x80 | Schema_Builtin | Size: 0x4
	m_flBrightnessScale: 132n, // float32 m_flBrightnessScale; |  0x84 | Schema_Builtin | Size: 0x4
	m_flBrightnessMult: 136n, // float32 m_flBrightnessMult; |  0x88 | Schema_Builtin | Size: 0x4
	m_flRange: 140n, // float32 m_flRange; |  0x8c | Schema_Builtin | Size: 0x4
	m_flFalloff: 144n, // float32 m_flFalloff; |  0x90 | Schema_Builtin | Size: 0x4
	m_flAttenuation0: 148n, // float32 m_flAttenuation0; |  0x94 | Schema_Builtin | Size: 0x4
	m_flAttenuation1: 152n, // float32 m_flAttenuation1; |  0x98 | Schema_Builtin | Size: 0x4
	m_flAttenuation2: 156n, // float32 m_flAttenuation2; |  0x9c | Schema_Builtin | Size: 0x4
	m_flTheta: 160n, // float32 m_flTheta; |  0xa0 | Schema_Builtin | Size: 0x4
	m_flPhi: 164n, // float32 m_flPhi; |  0xa4 | Schema_Builtin | Size: 0x4
	m_hLightCookie: 168n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeCTextureBase>  | Schema_Atomic | Size: 0x8
	m_nCascades: 176n, // int32_t m_nCascades; |  0xb0 | Schema_Builtin | Size: 0x4
	m_nCastShadows: 180n, // int32_t m_nCastShadows; |  0xb4 | Schema_Builtin | Size: 0x4
	m_nShadowWidth: 184n, // int32_t m_nShadowWidth; |  0xb8 | Schema_Builtin | Size: 0x4
	m_nShadowHeight: 188n, // int32_t m_nShadowHeight; |  0xbc | Schema_Builtin | Size: 0x4
	m_bRenderDiffuse: 192n, // bool m_bRenderDiffuse; |  0xc0 | Schema_Builtin | Size: 0x1
	m_nRenderSpecular: 196n, // int32_t m_nRenderSpecular; |  0xc4 | Schema_Builtin | Size: 0x4
	m_bRenderTransmissive: 200n, // bool m_bRenderTransmissive; |  0xc8 | Schema_Builtin | Size: 0x1
	m_flOrthoLightWidth: 204n, // float32 m_flOrthoLightWidth; |  0xcc | Schema_Builtin | Size: 0x4
	m_flOrthoLightHeight: 208n, // float32 m_flOrthoLightHeight; |  0xd0 | Schema_Builtin | Size: 0x4
	m_nStyle: 212n, // int32_t m_nStyle; |  0xd4 | Schema_Builtin | Size: 0x4
	m_Pattern: 216n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nCascadeRenderStaticObjects: 224n, // int32_t m_nCascadeRenderStaticObjects; |  0xe0 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeCrossFade: 228n, // float32 m_flShadowCascadeCrossFade; |  0xe4 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistanceFade: 232n, // float32 m_flShadowCascadeDistanceFade; |  0xe8 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance0: 236n, // float32 m_flShadowCascadeDistance0; |  0xec | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance1: 240n, // float32 m_flShadowCascadeDistance1; |  0xf0 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance2: 244n, // float32 m_flShadowCascadeDistance2; |  0xf4 | Schema_Builtin | Size: 0x4
	m_flShadowCascadeDistance3: 248n, // float32 m_flShadowCascadeDistance3; |  0xf8 | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution0: 252n, // int32_t m_nShadowCascadeResolution0; |  0xfc | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution1: 256n, // int32_t m_nShadowCascadeResolution1; |  0x100 | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution2: 260n, // int32_t m_nShadowCascadeResolution2; |  0x104 | Schema_Builtin | Size: 0x4
	m_nShadowCascadeResolution3: 264n, // int32_t m_nShadowCascadeResolution3; |  0x108 | Schema_Builtin | Size: 0x4
	m_bUsesBakedShadowing: 268n, // bool m_bUsesBakedShadowing; |  0x10c | Schema_Builtin | Size: 0x1
	m_nShadowPriority: 272n, // int32_t m_nShadowPriority; |  0x110 | Schema_Builtin | Size: 0x4
	m_nBakedShadowIndex: 276n, // int32_t m_nBakedShadowIndex; |  0x114 | Schema_Builtin | Size: 0x4
	m_nLightPathUniqueId: 280n, // int32_t m_nLightPathUniqueId; |  0x118 | Schema_Builtin | Size: 0x4
	m_nLightMapUniqueId: 284n, // int32_t m_nLightMapUniqueId; |  0x11c | Schema_Builtin | Size: 0x4
	m_bRenderToCubemaps: 288n, // bool m_bRenderToCubemaps; |  0x120 | Schema_Builtin | Size: 0x1
	m_bAllowSSTGeneration: 289n, // bool m_bAllowSSTGeneration; |  0x121 | Schema_Builtin | Size: 0x1
	m_nDirectLight: 292n, // int32_t m_nDirectLight; |  0x124 | Schema_Builtin | Size: 0x4
	m_nIndirectLight: 296n, // int32_t m_nIndirectLight; |  0x128 | Schema_Builtin | Size: 0x4
	m_bDynamicBounce: 300n, // bool m_bDynamicBounce; |  0x12c | Schema_Builtin | Size: 0x1
	m_flFadeMinDist: 304n, // float32 m_flFadeMinDist; |  0x130 | Schema_Builtin | Size: 0x4
	m_flFadeMaxDist: 308n, // float32 m_flFadeMaxDist; |  0x134 | Schema_Builtin | Size: 0x4
	m_flShadowFadeMinDist: 312n, // float32 m_flShadowFadeMinDist; |  0x138 | Schema_Builtin | Size: 0x4
	m_flShadowFadeMaxDist: 316n, // float32 m_flShadowFadeMaxDist; |  0x13c | Schema_Builtin | Size: 0x4
	m_bEnabled: 320n, // bool m_bEnabled; |  0x140 | Schema_Builtin | Size: 0x1
	m_bFlicker: 321n, // bool m_bFlicker; |  0x141 | Schema_Builtin | Size: 0x1
	m_bPrecomputedFieldsValid: 322n, // bool m_bPrecomputedFieldsValid; |  0x142 | Schema_Builtin | Size: 0x1
	m_vPrecomputedBoundsMins: 324n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedBoundsMaxs: 336n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBOrigin: 348n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBAngles: 360n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vPrecomputedOBBExtent: 372n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flPrecomputedMaxRange: 384n, // float32 m_flPrecomputedMaxRange; |  0x180 | Schema_Builtin | Size: 0x4
	m_nFogLightingMode: 388n, // int32_t m_nFogLightingMode; |  0x184 | Schema_Builtin | Size: 0x4
	m_flFogContributionStength: 392n, // float32 m_flFogContributionStength; |  0x188 | Schema_Builtin | Size: 0x4
	m_flNearClipPlane: 396n, // float32 m_flNearClipPlane; |  0x18c | Schema_Builtin | Size: 0x4
	m_SkyColor: 400n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_flSkyIntensity: 404n, // float32 m_flSkyIntensity; |  0x194 | Schema_Builtin | Size: 0x4
	m_SkyAmbientBounce: 408n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bUseSecondaryColor: 412n, // bool m_bUseSecondaryColor; |  0x19c | Schema_Builtin | Size: 0x1
	m_bMixedShadows: 413n, // bool m_bMixedShadows; |  0x19d | Schema_Builtin | Size: 0x1
	m_flLightStyleStartTime: 416n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flCapsuleLength: 420n, // float32 m_flCapsuleLength; |  0x1a4 | Schema_Builtin | Size: 0x4
	m_flMinRoughness: 424n, // float32 m_flMinRoughness; |  0x1a8 | Schema_Builtin | Size: 0x4
}
