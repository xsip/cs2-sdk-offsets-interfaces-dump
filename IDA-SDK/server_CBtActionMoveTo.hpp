#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"
#include "server_CountdownTimer.hpp"
#include "server_CountdownTimer.hpp"

class server_CBtActionMoveTo {
    char pad_2818[0x58];
    void **__vftable_0;
    CUtlString m_szDestinationInputKey;
    CUtlString m_szHidingSpotInputKey;
    CUtlString m_szThreatInputKey;
    Vector m_vecDestination;
    bool m_bAutoLookAdjust;
    bool m_bComputePath;
    char pad_3290[0x2];
    float32 m_flDamagingAreasPenaltyCost;
    char pad_3291[0x4];
    server_CountdownTimer m_CheckApproximateCornersTimer;
    server_CountdownTimer m_CheckHighPriorityItem;
    server_CountdownTimer m_RepathTimer;
    float32 m_flArrivalEpsilon;
    float32 m_flAdditionalArrivalEpsilon2D;
    float32 m_flHidingSpotCheckDistanceThreshold;
    float32 m_flNearestAreaDistanceThreshold;
};
