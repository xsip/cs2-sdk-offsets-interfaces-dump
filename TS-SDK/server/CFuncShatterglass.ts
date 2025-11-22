// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x918
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncShatterglass  = {
	...server_CBaseModelEntity,
	m_matPanelTransform: 2008n, // GlobalTypes::matrix3x4_t  | Schema_Atomic | Size: 0x30
	m_matPanelTransformWsTemp: 2056n, // GlobalTypes::matrix3x4_t  | Schema_Atomic | Size: 0x30
	m_vecShatterGlassShards: 2104n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_PanelSize: 2128n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_flLastShatterSoundEmitTime: 2136n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastCleanupTime: 2140n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flInitAtTime: 2144n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flGlassThickness: 2148n, // float32 m_flGlassThickness; |  0x864 | Schema_Builtin | Size: 0x4
	m_flSpawnInvulnerability: 2152n, // float32 m_flSpawnInvulnerability; |  0x868 | Schema_Builtin | Size: 0x4
	m_bBreakSilent: 2156n, // bool m_bBreakSilent; |  0x86c | Schema_Builtin | Size: 0x1
	m_bBreakShardless: 2157n, // bool m_bBreakShardless; |  0x86d | Schema_Builtin | Size: 0x1
	m_bBroken: 2158n, // bool m_bBroken; |  0x86e | Schema_Builtin | Size: 0x1
	m_bGlassNavIgnore: 2159n, // bool m_bGlassNavIgnore; |  0x86f | Schema_Builtin | Size: 0x1
	m_bGlassInFrame: 2160n, // bool m_bGlassInFrame; |  0x870 | Schema_Builtin | Size: 0x1
	m_bStartBroken: 2161n, // bool m_bStartBroken; |  0x871 | Schema_Builtin | Size: 0x1
	m_iInitialDamageType: 2162n, // uint8_t m_iInitialDamageType; |  0x872 | Schema_Builtin | Size: 0x1
	m_szDamagePositioningEntityName01: 2168n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_szDamagePositioningEntityName02: 2176n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_szDamagePositioningEntityName03: 2184n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_szDamagePositioningEntityName04: 2192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_vInitialDamagePositions: 2200n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_vExtraDamagePositions: 2224n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_vInitialPanelVertices: 2248n, // GlobalTypes::CUtlVector<GlobalTypes::Vector4D>  | Schema_Atomic | Size: 0x18
	m_OnBroken: 2272n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_iSurfaceType: 2312n, // uint8_t m_iSurfaceType; |  0x908 | Schema_Builtin | Size: 0x1
	m_hMaterialDamageBase: 2320n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
}
