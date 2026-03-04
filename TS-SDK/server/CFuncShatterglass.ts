// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x860
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncShatterglass  = {
	...server_CBaseModelEntity,
	m_matPanelTransform: 1840n, // GlobalTypes::matrix3x4_t  | Schema_Atomic | Size: 0x30
	m_matPanelTransformWsTemp: 1888n, // GlobalTypes::matrix3x4_t  | Schema_Atomic | Size: 0x30
	m_vecShatterGlassShards: 1936n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_PanelSize: 1960n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_flLastShatterSoundEmitTime: 1968n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastCleanupTime: 1972n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flInitAtTime: 1976n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flGlassThickness: 1980n, // float32 m_flGlassThickness; |  0x7bc | Schema_Builtin | Size: 0x4
	m_flSpawnInvulnerability: 1984n, // float32 m_flSpawnInvulnerability; |  0x7c0 | Schema_Builtin | Size: 0x4
	m_bBreakSilent: 1988n, // bool m_bBreakSilent; |  0x7c4 | Schema_Builtin | Size: 0x1
	m_bBreakShardless: 1989n, // bool m_bBreakShardless; |  0x7c5 | Schema_Builtin | Size: 0x1
	m_bBroken: 1990n, // bool m_bBroken; |  0x7c6 | Schema_Builtin | Size: 0x1
	m_bGlassNavIgnore: 1991n, // bool m_bGlassNavIgnore; |  0x7c7 | Schema_Builtin | Size: 0x1
	m_bGlassInFrame: 1992n, // bool m_bGlassInFrame; |  0x7c8 | Schema_Builtin | Size: 0x1
	m_bStartBroken: 1993n, // bool m_bStartBroken; |  0x7c9 | Schema_Builtin | Size: 0x1
	m_iInitialDamageType: 1994n, // uint8_t m_iInitialDamageType; |  0x7ca | Schema_Builtin | Size: 0x1
	m_szDamagePositioningEntityName01: 2000n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_szDamagePositioningEntityName02: 2008n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_szDamagePositioningEntityName03: 2016n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_szDamagePositioningEntityName04: 2024n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_vInitialDamagePositions: 2032n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_vExtraDamagePositions: 2056n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_vInitialPanelVertices: 2080n, // GlobalTypes::CUtlVector<GlobalTypes::Vector4D>  | Schema_Atomic | Size: 0x18
	m_OnBroken: 2104n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_iSurfaceType: 2128n, // uint8_t m_iSurfaceType; |  0x850 | Schema_Builtin | Size: 0x1
	m_hMaterialDamageBase: 2136n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIMaterial2>  | Schema_Atomic | Size: 0x8
}
