#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_FrameStamp_t {
    float32 m_flTime;
    float32 m_flEntitySimTime;
    bool m_bTeleportTick;
    bool m_bPredicted;
    char pad_394[0x2];
    float32 m_flCurTime;
    float32 m_flRealTime;
    int32_t m_nFrameCount;
    int32_t m_nTickCount;
};
