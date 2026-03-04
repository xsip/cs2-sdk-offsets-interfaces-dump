#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CSoundEnvelope {
    float32 m_current;
    float32 m_target;
    float32 m_rate;
    bool m_forceupdate;
    char pad_1904[0x3];
};
