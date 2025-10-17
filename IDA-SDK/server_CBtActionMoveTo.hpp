#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"
#include "server_CountdownTimer.hpp"
#include "server_CountdownTimer.hpp"

class server_CBtActionMoveTo {
    char pad_2722[0x58];
    char vTable3164[0x8];
    CUtlString m_szDestinationInputKey;
    CUtlString m_szHidingSpotInputKey;
    CUtlString m_szThreatInputKey;
    Vector m_vecDestination;
    bool m_bAutoLookAdjust;
    bool m_bComputePath;
    char pad_3165[0x2];
    float32 m_flDamagingAreasPenaltyCost;
    char pad_3166[0x4];
    server_CountdownTimer m_CheckApproximateCornersTimer;
    server_CountdownTimer m_CheckHighPriorityItem;
    server_CountdownTimer m_RepathTimer;
    float32 m_flArrivalEpsilon;
    float32 m_flAdditionalArrivalEpsilon2D;
    float32 m_flHidingSpotCheckDistanceThreshold;
    float32 m_flNearestAreaDistanceThreshold;
};
