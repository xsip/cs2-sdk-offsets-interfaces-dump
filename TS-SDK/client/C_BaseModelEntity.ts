// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0xEB0
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_BaseModelEntity  = {
	...client_C_BaseEntity,
	m_CRenderComponent: 2784n, // client::CRenderComponent**  | Schema_Ptr | Size: 0x8
	m_CHitboxComponent: 2792n, // client::CHitboxComponent  | Schema_DeclaredClass | Size: 0x18
	m_pDestructiblePartsSystemComponent: 2816n, // client::CDestructiblePartsComponent**  | Schema_Ptr | Size: 0x8
	m_LastHitGroup: 2824n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_sLastDamageSourceName: 2832n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_vLastDamagePosition: 2840n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_bInitModelEffects: 2880n, // bool m_bInitModelEffects; |  0xb40 | Schema_Builtin | Size: 0x1
	m_bIsStaticProp: 2881n, // bool m_bIsStaticProp; |  0xb41 | Schema_Builtin | Size: 0x1
	m_nLastAddDecal: 2884n, // int32_t m_nLastAddDecal; |  0xb44 | Schema_Builtin | Size: 0x4
	m_nDecalsAdded: 2888n, // int32_t m_nDecalsAdded; |  0xb48 | Schema_Builtin | Size: 0x4
	m_iOldHealth: 2892n, // int32_t m_iOldHealth; |  0xb4c | Schema_Builtin | Size: 0x4
	m_nRenderMode: 2896n, // client::RenderMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_nRenderFX: 2897n, // client::RenderFx_t  | Schema_DeclaredEnum | Size: 0x1
	m_bAllowFadeInView: 2898n, // bool m_bAllowFadeInView; |  0xb52 | Schema_Builtin | Size: 0x1
	m_clrRender: 2928n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_vecRenderAttributes: 2936n, // client::C_UtlVectorEmbeddedNetworkVar<client::EntityRenderAttribute_t>  | Schema_Atomic | Size: 0x68
	m_bRenderToCubemaps: 3064n, // bool m_bRenderToCubemaps; |  0xbf8 | Schema_Builtin | Size: 0x1
	m_bNoInterpolate: 3065n, // bool m_bNoInterpolate; |  0xbf9 | Schema_Builtin | Size: 0x1
	m_Collision: 3072n, // client::CCollisionProperty  | Schema_DeclaredClass | Size: 0xb0
	m_Glow: 3248n, // client::CGlowProperty  | Schema_DeclaredClass | Size: 0x58
	m_flGlowBackfaceMult: 3336n, // float32 m_flGlowBackfaceMult; |  0xd08 | Schema_Builtin | Size: 0x4
	m_fadeMinDist: 3340n, // float32 m_fadeMinDist; |  0xd0c | Schema_Builtin | Size: 0x4
	m_fadeMaxDist: 3344n, // float32 m_fadeMaxDist; |  0xd10 | Schema_Builtin | Size: 0x4
	m_flFadeScale: 3348n, // float32 m_flFadeScale; |  0xd14 | Schema_Builtin | Size: 0x4
	m_flShadowStrength: 3352n, // float32 m_flShadowStrength; |  0xd18 | Schema_Builtin | Size: 0x4
	m_nObjectCulling: 3356n, // uint8_t m_nObjectCulling; |  0xd1c | Schema_Builtin | Size: 0x1
	m_nAddDecal: 3360n, // int32_t m_nAddDecal; |  0xd20 | Schema_Builtin | Size: 0x4
	m_vDecalPosition: 3364n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vDecalForwardAxis: 3376n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nDecalMode: 3388n, // client::DecalMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_nRequiredDecalMode: 3389n, // client::DecalMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_ConfigEntitiesToPropagateMaterialDecalsTo: 3392n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BaseModelEntity>>  | Schema_Atomic | Size: 0x18
	m_vecViewOffset: 3456n, // client::CNetworkViewOffsetVector  | Schema_DeclaredClass | Size: 0x28
	m_pClientAlphaProperty: 3680n, // client::CClientAlphaProperty**  | Schema_Ptr | Size: 0x8
	m_ClientOverrideTint: 3688n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_bUseClientOverrideTint: 3692n, // bool m_bUseClientOverrideTint; |  0xe6c | Schema_Builtin | Size: 0x1
	m_bvDisabledHitGroups: 3752n, // uint32_t m_bvDisabledHitGroups[1]; |  0xea8 | Schema_FixedArray | Size: 0x4
}
