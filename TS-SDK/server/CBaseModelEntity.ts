// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x730
// BaseClass: : public CS2::server::CBaseEntity
export const server_CBaseModelEntity  = {
	...server_CBaseEntity,
	m_CRenderComponent: 1192n, // server::CRenderComponent**  | Schema_Ptr | Size: 0x8
	m_CHitboxComponent: 1200n, // server::CHitboxComponent  | Schema_DeclaredClass | Size: 0x18
	m_nDestructiblePartInitialStateDestructed0: 1224n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed1: 1228n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed2: 1232n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed3: 1236n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed4: 1240n, // client::HitGroup_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDestructiblePartInitialStateDestructed0_PartIndex: 1244n, // int32_t m_nDestructiblePartInitialStateDestructed0_PartIndex; |  0x4dc | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed1_PartIndex: 1248n, // int32_t m_nDestructiblePartInitialStateDestructed1_PartIndex; |  0x4e0 | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed2_PartIndex: 1252n, // int32_t m_nDestructiblePartInitialStateDestructed2_PartIndex; |  0x4e4 | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed3_PartIndex: 1256n, // int32_t m_nDestructiblePartInitialStateDestructed3_PartIndex; |  0x4e8 | Schema_Builtin | Size: 0x4
	m_nDestructiblePartInitialStateDestructed4_PartIndex: 1260n, // int32_t m_nDestructiblePartInitialStateDestructed4_PartIndex; |  0x4ec | Schema_Builtin | Size: 0x4
	m_pDestructiblePartsSystemComponent: 1264n, // server::CDestructiblePartsComponent**  | Schema_Ptr | Size: 0x8
	m_flDissolveStartTime: 1272n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_OnIgnite: 1280n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_nRenderMode: 1304n, // client::RenderMode_t  | Schema_DeclaredEnum | Size: 0x1
	m_nRenderFX: 1305n, // client::RenderFx_t  | Schema_DeclaredEnum | Size: 0x1
	m_bAllowFadeInView: 1306n, // bool m_bAllowFadeInView; |  0x51a | Schema_Builtin | Size: 0x1
	m_clrRender: 1336n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_vecRenderAttributes: 1344n, // server::CUtlVectorEmbeddedNetworkVar<server::EntityRenderAttribute_t>  | Schema_Atomic | Size: 0x68
	m_bRenderToCubemaps: 1448n, // bool m_bRenderToCubemaps; |  0x5a8 | Schema_Builtin | Size: 0x1
	m_bNoInterpolate: 1449n, // bool m_bNoInterpolate; |  0x5a9 | Schema_Builtin | Size: 0x1
	m_Collision: 1456n, // server::CCollisionProperty  | Schema_DeclaredClass | Size: 0xb0
	m_Glow: 1632n, // server::CGlowProperty  | Schema_DeclaredClass | Size: 0x58
	m_flGlowBackfaceMult: 1720n, // float32 m_flGlowBackfaceMult; |  0x6b8 | Schema_Builtin | Size: 0x4
	m_fadeMinDist: 1724n, // float32 m_fadeMinDist; |  0x6bc | Schema_Builtin | Size: 0x4
	m_fadeMaxDist: 1728n, // float32 m_fadeMaxDist; |  0x6c0 | Schema_Builtin | Size: 0x4
	m_flFadeScale: 1732n, // float32 m_flFadeScale; |  0x6c4 | Schema_Builtin | Size: 0x4
	m_flShadowStrength: 1736n, // float32 m_flShadowStrength; |  0x6c8 | Schema_Builtin | Size: 0x4
	m_nObjectCulling: 1740n, // uint8_t m_nObjectCulling; |  0x6cc | Schema_Builtin | Size: 0x1
	m_vecViewOffset: 1784n, // client::CNetworkViewOffsetVector  | Schema_DeclaredClass | Size: 0x28
	m_bvDisabledHitGroups: 1832n, // uint32_t m_bvDisabledHitGroups[1]; |  0x728 | Schema_FixedArray | Size: 0x4
}
