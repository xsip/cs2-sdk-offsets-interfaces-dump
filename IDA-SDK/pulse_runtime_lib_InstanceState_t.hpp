#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_runtime_lib_InstanceState_t {
    char m_Shuffle[0x20];
    int32_t m_nNextShuffle;
    char end_pad_511[0x4];
};
