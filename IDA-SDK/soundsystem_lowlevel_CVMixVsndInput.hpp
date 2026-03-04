#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_CVMixVsndInput {
    CUtlString m_name;
    char end_pad_625[0x8];
    CUtlString m_defaultValue;
    int32_t m_nProcessor;
    char end_pad_654[0x4];
};
