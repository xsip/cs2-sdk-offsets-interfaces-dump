#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_CVMixAutomaticControlInput {
    CUtlString m_name;
    int32_t m_nControlInputIndex;
    bool m_bIsTrackSend;
    bool m_bIsStackVar;
    char end_pad_622[0x2];
};
