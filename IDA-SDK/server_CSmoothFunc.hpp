#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CSmoothFunc {
    char vTable2766[0x8];
    float32 m_flSmoothAmplitude;
    float32 m_flSmoothBias;
    float32 m_flSmoothDuration;
    float32 m_flSmoothRemainingTime;
    int32_t m_nSmoothDir;
    char end_pad_2767[0x4];
};
