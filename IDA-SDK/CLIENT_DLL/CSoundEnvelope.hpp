#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CSoundEnvelope {
    float32 m_current;
    float32 m_target;
    float32 m_rate;
    bool m_forceupdate;
    char pad_528[0x3];
};
