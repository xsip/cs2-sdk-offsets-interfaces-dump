#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_CVMixGraphDescData {
    CUtlString m_name;
    int32_t m_nGraphOutputChannels;
    bool m_bIsMainGraph;
    char end_pad_640[0x3];
};
