// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xA88
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncMover  = {
	...server_CBaseModelEntity,
	m_iszPathName: 2008n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPathMover: 2016n, // GlobalTypes::CHandle<server::CPathMover>  | Schema_Atomic | Size: 0x4
	m_hPrevPathMover: 2020n, // GlobalTypes::CHandle<server::CPathMover>  | Schema_Atomic | Size: 0x4
	m_iszPathNodeStart: 2024n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPathNodeEnd: 2032n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_eMoveType: 2040n, // server::CFuncMover::Move_t  | Schema_DeclaredEnum | Size: 0x4
	m_bIsReversing: 2044n, // bool m_bIsReversing; |  0x7fc | Schema_Builtin | Size: 0x1
	m_vTarget: 2048n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flStartSpeed: 2060n, // float32 m_flStartSpeed; |  0x80c | Schema_Builtin | Size: 0x4
	m_flPathLocation: 2064n, // float32 m_flPathLocation; |  0x810 | Schema_Builtin | Size: 0x4
	m_flT: 2068n, // float32 m_flT; |  0x814 | Schema_Builtin | Size: 0x4
	m_nCurrentNodeIndex: 2072n, // int32_t m_nCurrentNodeIndex; |  0x818 | Schema_Builtin | Size: 0x4
	m_nPreviousNodeIndex: 2076n, // int32_t m_nPreviousNodeIndex; |  0x81c | Schema_Builtin | Size: 0x4
	m_eSolidType: 2080n, // client::SolidType_t  | Schema_DeclaredEnum | Size: 0x1
	m_bIsMoving: 2081n, // bool m_bIsMoving; |  0x821 | Schema_Builtin | Size: 0x1
	m_flTimeToReachMaxSpeed: 2084n, // float32 m_flTimeToReachMaxSpeed; |  0x824 | Schema_Builtin | Size: 0x4
	m_flDistanceToReachMaxSpeed: 2088n, // float32 m_flDistanceToReachMaxSpeed; |  0x828 | Schema_Builtin | Size: 0x4
	m_flTimeToReachZeroSpeed: 2092n, // float32 m_flTimeToReachZeroSpeed; |  0x82c | Schema_Builtin | Size: 0x4
	m_flDistanceToReachZeroSpeed: 2096n, // float32 m_flDistanceToReachZeroSpeed; |  0x830 | Schema_Builtin | Size: 0x4
	m_flTimeMovementStart: 2100n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flTimeMovementStop: 2104n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hStopAtNode: 2108n, // GlobalTypes::CHandle<server::CMoverPathNode>  | Schema_Atomic | Size: 0x4
	m_flPathLocationToBeginStop: 2112n, // float32 m_flPathLocationToBeginStop; |  0x840 | Schema_Builtin | Size: 0x4
	m_iszStartForwardSound: 2120n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLoopForwardSound: 2128n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszStopForwardSound: 2136n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszStartReverseSound: 2144n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLoopReverseSound: 2152n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszStopReverseSound: 2160n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszArriveAtDestinationSound: 2168n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnMovementEnd: 2200n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bStartAtClosestPoint: 2240n, // bool m_bStartAtClosestPoint; |  0x8c0 | Schema_Builtin | Size: 0x1
	m_bStartAtEnd: 2241n, // bool m_bStartAtEnd; |  0x8c1 | Schema_Builtin | Size: 0x1
	m_eOrientationUpdate: 2244n, // server::CFuncMover::OrientationUpdate_t  | Schema_DeclaredEnum | Size: 0x4
	m_flTimeStartOrientationChange: 2248n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flTimeToBlendToNewOrientation: 2252n, // float32 m_flTimeToBlendToNewOrientation; |  0x8cc | Schema_Builtin | Size: 0x4
	m_flDurationBlendToNewOrientationRan: 2256n, // float32 m_flDurationBlendToNewOrientationRan; |  0x8d0 | Schema_Builtin | Size: 0x4
	m_nOriginalOrientationIndex: 2260n, // int32_t m_nOriginalOrientationIndex; |  0x8d4 | Schema_Builtin | Size: 0x4
	m_bCreateMovableNavMesh: 2264n, // bool m_bCreateMovableNavMesh; |  0x8d8 | Schema_Builtin | Size: 0x1
	m_bAllowMovableNavMeshDockingOnEntireEntity: 2265n, // bool m_bAllowMovableNavMeshDockingOnEntireEntity; |  0x8d9 | Schema_Builtin | Size: 0x1
	m_OnNodePassed: 2272n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_iszOrientationMatchEntityName: 2312n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hOrientationMatchEntity: 2320n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flTimeToTraverseToNextNode: 2324n, // float32 m_flTimeToTraverseToNextNode; |  0x914 | Schema_Builtin | Size: 0x4
	m_vLerpToNewPosStartInPathEntitySpace: 2328n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vLerpToNewPosEndInPathEntitySpace: 2340n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLerpToPositionT: 2352n, // float32 m_flLerpToPositionT; |  0x930 | Schema_Builtin | Size: 0x4
	m_flLerpToPositionDeltaT: 2356n, // float32 m_flLerpToPositionDeltaT; |  0x934 | Schema_Builtin | Size: 0x4
	m_OnLerpToPositionComplete: 2360n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bIsPaused: 2400n, // bool m_bIsPaused; |  0x960 | Schema_Builtin | Size: 0x1
	m_eTransitionedToPathNodeAction: 2404n, // server::CFuncMover::TransitionToPathNodeAction_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDelayedTeleportToNode: 2408n, // int32_t m_nDelayedTeleportToNode; |  0x968 | Schema_Builtin | Size: 0x4
	m_bIsVerboseLogging: 2412n, // bool m_bIsVerboseLogging; |  0x96c | Schema_Builtin | Size: 0x1
	m_hFollowEntity: 2416n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flFollowDistance: 2420n, // float32 m_flFollowDistance; |  0x974 | Schema_Builtin | Size: 0x4
	m_flFollowMinimumSpeed: 2424n, // float32 m_flFollowMinimumSpeed; |  0x978 | Schema_Builtin | Size: 0x4
	m_flCurFollowEntityT: 2428n, // float32 m_flCurFollowEntityT; |  0x97c | Schema_Builtin | Size: 0x4
	m_flCurFollowSpeed: 2432n, // float32 m_flCurFollowSpeed; |  0x980 | Schema_Builtin | Size: 0x4
	m_strOrientationFaceEntityName: 2440n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hOrientationFaceEntity: 2448n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_OnStart: 2456n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStartForward: 2496n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStartReverse: 2536n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStop: 2576n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStopped: 2616n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bNextNodeReturnsCurrent: 2656n, // bool m_bNextNodeReturnsCurrent; |  0xa60 | Schema_Builtin | Size: 0x1
	m_bStartedMoving: 2657n, // bool m_bStartedMoving; |  0xa61 | Schema_Builtin | Size: 0x1
	m_eFollowEntityDirection: 2688n, // server::CFuncMover::FollowEntityDirection_t  | Schema_DeclaredEnum | Size: 0x4
}
