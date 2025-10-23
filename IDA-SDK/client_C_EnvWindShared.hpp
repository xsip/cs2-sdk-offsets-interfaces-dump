#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_C_EnvWindShared {
    char vTable1415[0x8];
    entity2_GameTime_t m_flStartTime;
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
    char end_pad_1416[0xb8];
};
