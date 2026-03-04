// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x998
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncMover  = {
	...server_CBaseModelEntity,
	m_iszPathName: 1840n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hPathMover: 1848n, // GlobalTypes::CHandle<server::CPathMover>  | Schema_Atomic | Size: 0x4
	m_hPrevPathMover: 1852n, // GlobalTypes::CHandle<server::CPathMover>  | Schema_Atomic | Size: 0x4
	m_iszPathNodeStart: 1856n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPathNodeEnd: 1864n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_eMoveType: 1872n, // server::CFuncMover::Move_t  | Schema_DeclaredEnum | Size: 0x4
	m_bIsReversing: 1876n, // bool m_bIsReversing; |  0x754 | Schema_Builtin | Size: 0x1
	m_flStartSpeed: 1880n, // float32 m_flStartSpeed; |  0x758 | Schema_Builtin | Size: 0x4
	m_flPathLocation: 1884n, // float32 m_flPathLocation; |  0x75c | Schema_Builtin | Size: 0x4
	m_flT: 1888n, // float32 m_flT; |  0x760 | Schema_Builtin | Size: 0x4
	m_nCurrentNodeIndex: 1892n, // int32_t m_nCurrentNodeIndex; |  0x764 | Schema_Builtin | Size: 0x4
	m_nPreviousNodeIndex: 1896n, // int32_t m_nPreviousNodeIndex; |  0x768 | Schema_Builtin | Size: 0x4
	m_eSolidType: 1900n, // client::SolidType_t  | Schema_DeclaredEnum | Size: 0x1
	m_bIsMoving: 1901n, // bool m_bIsMoving; |  0x76d | Schema_Builtin | Size: 0x1
	m_flTimeToReachMaxSpeed: 1904n, // float32 m_flTimeToReachMaxSpeed; |  0x770 | Schema_Builtin | Size: 0x4
	m_flDistanceToReachMaxSpeed: 1908n, // float32 m_flDistanceToReachMaxSpeed; |  0x774 | Schema_Builtin | Size: 0x4
	m_flTimeToReachZeroSpeed: 1912n, // float32 m_flTimeToReachZeroSpeed; |  0x778 | Schema_Builtin | Size: 0x4
	m_flComputedDistanceToReachMaxSpeed: 1916n, // float32 m_flComputedDistanceToReachMaxSpeed; |  0x77c | Schema_Builtin | Size: 0x4
	m_flComputedDistanceToReachZeroSpeed: 1920n, // float32 m_flComputedDistanceToReachZeroSpeed; |  0x780 | Schema_Builtin | Size: 0x4
	m_flStartCurveScale: 1924n, // float32 m_flStartCurveScale; |  0x784 | Schema_Builtin | Size: 0x4
	m_flStopCurveScale: 1928n, // float32 m_flStopCurveScale; |  0x788 | Schema_Builtin | Size: 0x4
	m_flDistanceToReachZeroSpeed: 1932n, // float32 m_flDistanceToReachZeroSpeed; |  0x78c | Schema_Builtin | Size: 0x4
	m_flTimeMovementStart: 1936n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flTimeMovementStop: 1940n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hStopAtNode: 1944n, // GlobalTypes::CHandle<server::CMoverPathNode>  | Schema_Atomic | Size: 0x4
	m_flPathLocationToBeginStop: 1948n, // float32 m_flPathLocationToBeginStop; |  0x79c | Schema_Builtin | Size: 0x4
	m_flPathLocationStart: 1952n, // float32 m_flPathLocationStart; |  0x7a0 | Schema_Builtin | Size: 0x4
	m_flBeginStopT: 1956n, // float32 m_flBeginStopT; |  0x7a4 | Schema_Builtin | Size: 0x4
	m_iszStartForwardSound: 1960n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLoopForwardSound: 1968n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszStopForwardSound: 1976n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszStartReverseSound: 1984n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszLoopReverseSound: 1992n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszStopReverseSound: 2000n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszArriveAtDestinationSound: 2008n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnMovementEnd: 2040n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bStartAtClosestPoint: 2064n, // bool m_bStartAtClosestPoint; |  0x810 | Schema_Builtin | Size: 0x1
	m_bStartAtEnd: 2065n, // bool m_bStartAtEnd; |  0x811 | Schema_Builtin | Size: 0x1
	m_bStartFollowingClosestMover: 2066n, // bool m_bStartFollowingClosestMover; |  0x812 | Schema_Builtin | Size: 0x1
	m_eOrientationUpdate: 2068n, // server::CFuncMover::OrientationUpdate_t  | Schema_DeclaredEnum | Size: 0x4
	m_flTimeStartOrientationChange: 2072n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flTimeToBlendToNewOrientation: 2076n, // float32 m_flTimeToBlendToNewOrientation; |  0x81c | Schema_Builtin | Size: 0x4
	m_flDurationBlendToNewOrientationRan: 2080n, // float32 m_flDurationBlendToNewOrientationRan; |  0x820 | Schema_Builtin | Size: 0x4
	m_nOriginalOrientationIndex: 2084n, // int32_t m_nOriginalOrientationIndex; |  0x824 | Schema_Builtin | Size: 0x4
	m_bCreateMovableNavMesh: 2088n, // bool m_bCreateMovableNavMesh; |  0x828 | Schema_Builtin | Size: 0x1
	m_bAllowMovableNavMeshDockingOnEntireEntity: 2089n, // bool m_bAllowMovableNavMeshDockingOnEntireEntity; |  0x829 | Schema_Builtin | Size: 0x1
	m_OnNodePassed: 2096n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_iszOrientationMatchEntityName: 2128n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hOrientationMatchEntity: 2136n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flTimeToTraverseToNextNode: 2140n, // float32 m_flTimeToTraverseToNextNode; |  0x85c | Schema_Builtin | Size: 0x4
	m_vLerpToNewPosStartInPathEntitySpace: 2144n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vLerpToNewPosEndInPathEntitySpace: 2156n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flLerpToPositionT: 2168n, // float32 m_flLerpToPositionT; |  0x878 | Schema_Builtin | Size: 0x4
	m_flLerpToPositionDeltaT: 2172n, // float32 m_flLerpToPositionDeltaT; |  0x87c | Schema_Builtin | Size: 0x4
	m_OnLerpToPositionComplete: 2176n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bIsPaused: 2200n, // bool m_bIsPaused; |  0x898 | Schema_Builtin | Size: 0x1
	m_eTransitionedToPathNodeAction: 2204n, // server::CFuncMover::TransitionToPathNodeAction_t  | Schema_DeclaredEnum | Size: 0x4
	m_nDelayedTeleportToNode: 2208n, // int32_t m_nDelayedTeleportToNode; |  0x8a0 | Schema_Builtin | Size: 0x4
	m_bIsVerboseLogging: 2212n, // bool m_bIsVerboseLogging; |  0x8a4 | Schema_Builtin | Size: 0x1
	m_hFollowEntity: 2216n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flFollowDistance: 2220n, // float32 m_flFollowDistance; |  0x8ac | Schema_Builtin | Size: 0x4
	m_flFollowMinimumSpeed: 2224n, // float32 m_flFollowMinimumSpeed; |  0x8b0 | Schema_Builtin | Size: 0x4
	m_flCurFollowEntityT: 2228n, // float32 m_flCurFollowEntityT; |  0x8b4 | Schema_Builtin | Size: 0x4
	m_flCurFollowSpeed: 2232n, // float32 m_flCurFollowSpeed; |  0x8b8 | Schema_Builtin | Size: 0x4
	m_strOrientationFaceEntityName: 2240n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hOrientationFaceEntity: 2248n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_OnStart: 2256n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnStartForward: 2280n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnStartReverse: 2304n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnStop: 2328n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnStopped: 2352n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bNextNodeReturnsCurrent: 2376n, // bool m_bNextNodeReturnsCurrent; |  0x948 | Schema_Builtin | Size: 0x1
	m_bStartedMoving: 2377n, // bool m_bStartedMoving; |  0x949 | Schema_Builtin | Size: 0x1
	m_eFollowEntityDirection: 2408n, // server::CFuncMover::FollowEntityDirection_t  | Schema_DeclaredEnum | Size: 0x4
	m_hFollowMover: 2412n, // GlobalTypes::CHandle<server::CFuncMover>  | Schema_Atomic | Size: 0x4
	m_iszFollowMoverEntityName: 2416n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flFollowMoverDistance: 2424n, // float32 m_flFollowMoverDistance; |  0x978 | Schema_Builtin | Size: 0x4
	m_flFollowMoverCalculatedDistance: 2428n, // float32 m_flFollowMoverCalculatedDistance; |  0x97c | Schema_Builtin | Size: 0x4
	m_flFollowMoverSpringStrength: 2432n, // float32 m_flFollowMoverSpringStrength; |  0x980 | Schema_Builtin | Size: 0x4
	m_bFollowConstraintsInitialized: 2436n, // bool m_bFollowConstraintsInitialized; |  0x984 | Schema_Builtin | Size: 0x1
	m_eFollowConstraint: 2440n, // server::CFuncMover::FollowConstraint_t  | Schema_DeclaredEnum | Size: 0x4
	m_flFollowMoverSpeed: 2444n, // float32 m_flFollowMoverSpeed; |  0x98c | Schema_Builtin | Size: 0x4
	m_flFollowMoverVelocity: 2448n, // float32 m_flFollowMoverVelocity; |  0x990 | Schema_Builtin | Size: 0x4
	m_nTickMovementRan: 2452n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
}
