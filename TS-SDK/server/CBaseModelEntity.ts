// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x7D8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CBaseModelEntity  = {
	...server_CBaseEntity,
	m_CRenderComponent: 1264n, // server::CRenderComponent**  | Schema_Ptr | Size: 0x8
	m_CHitboxComponent: 1272n, // server::CHitboxComponent  | Schema_DeclaredClass | Size: 0x18
	m_nDestructiblePartInitialStateDestructed0: 1296n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed1: 1300n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed2: 1304n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed3: 1308n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed4: 1312n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed0_PartIndex: 1316n, // int32_t m_nDestructiblePartInitialStateDestructed0_PartIndex; |  0x524 | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed1_PartIndex: 1320n, // int32_t m_nDestructiblePartInitialStateDestructed1_PartIndex; |  0x528 | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed2_PartIndex: 1324n, // int32_t m_nDestructiblePartInitialStateDestructed2_PartIndex; |  0x52c | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed3_PartIndex: 1328n, // int32_t m_nDestructiblePartInitialStateDestructed3_PartIndex; |  0x530 | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed4_PartIndex: 1332n, // int32_t m_nDestructiblePartInitialStateDestructed4_PartIndex; |  0x534 | Schema_Builtin | Size: 0x4
	m_pDestructiblePartsSystemComponent: 1336n, // server::CDestructiblePartsComponent**  | Schema_Ptr | Size: 0x8
	m_LastHitGroup: 1344n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_sLastDamageSourceName: 1352n, // GlobalTypes::CGlobalSymbol  | Schema_Atomic | Size: 0x8
	m_vLastDamagePosition: 1360n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_flDissolveStartTime: 1372n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_OnIgnite: 1376n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_nRenderMode: 1416n, // client::RenderMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_nRenderFX: 1417n, // client::RenderFx_t  | Schema_DeclaredEnum | Size: 0x1
	m_bAllowFadeInView: 1418n, // bool m_bAllowFadeInView; |  0x58a | Schema_Builtin | Size: 0x1
	m_clrRender: 1448n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_vecRenderAttributes: 1456n, // server::CUtlVectorEmbeddedNetworkVar<server::EntityRenderAttribute_t>  | Schema_Atomic | Size: 0x68
	m_bRenderToCubemaps: 1560n, // bool m_bRenderToCubemaps; |  0x618 | Schema_Builtin | Size: 0x1
	m_bNoInterpolate: 1561n, // bool m_bNoInterpolate; |  0x619 | Schema_Builtin | Size: 0x1
	m_Collision: 1568n, // server::CCollisionProperty  | Schema_DeclaredClass | Size: 0xb0
	m_Glow: 1744n, // server::CGlowProperty  | Schema_DeclaredClass | Size: 0x58
	m_flGlowBackfaceMult: 1832n, // float32 m_flGlowBackfaceMult; |  0x728 | Schema_Builtin | Size: 0x4
	m_fadeMinDist: 1836n, // float32 m_fadeMinDist; |  0x72c | Schema_Builtin | Size: 0x4
	m_fadeMaxDist: 1840n, // float32 m_fadeMaxDist; |  0x730 | Schema_Builtin | Size: 0x4
	m_flFadeScale: 1844n, // float32 m_flFadeScale; |  0x734 | Schema_Builtin | Size: 0x4
	m_flShadowStrength: 1848n, // float32 m_flShadowStrength; |  0x738 | Schema_Builtin | Size: 0x4
	m_nObjectCulling: 1852n, // uint8_t m_nObjectCulling; |  0x73c | Schema_Builtin | Size: 0x1
	m_nAddDecal: 1856n, // int32_t m_nAddDecal; |  0x740 | Schema_Builtin | Size: 0x4
	m_vDecalPosition: 1860n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vDecalForwardAxis: 1872n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nDecalMode: 1884n, // client::DecalMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_nRequiredDecalMode: 1885n, // client::DecalMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_ConfigEntitiesToPropagateMaterialDecalsTo: 1888n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseModelEntity>>  | Schema_Atomic | Size: 0x18
	m_vecViewOffset: 1952n, // client::CNetworkViewOffsetVector  | Schema_DeclaredClass | Size: 0x28
	m_bvDisabledHitGroups: 2000n, // uint32_t m_bvDisabledHitGroups[1]; |  0x7d0 | Schema_FixedArray | Size: 0x4
}
