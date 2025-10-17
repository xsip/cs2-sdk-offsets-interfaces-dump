#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class C_EnvWindShared {
    char _vtable_pad_854[0x8];
    GameTime_t m_flStartTime;
    uint32_t m_iWindSeed;
    uint16_t m_iMinWind;
    uint16_t m_iMaxWind;
    int32_t m_windRadius;
    uint16_t m_iMinGust;
    uint16_t m_iMaxGust;
    float32 m_flMinGustDelay;
    float32 m_flMaxGustDelay;
    float32 m_flGustDuration;
    uint16_t m_iGustDirChange;
    uint16_t m_iInitialWindDir;
    float32 m_flInitialWindSpeed;
    Vector m_location;
    char m_hEntOwner[0x4];
    char end_pad_855[0xb8];
};
