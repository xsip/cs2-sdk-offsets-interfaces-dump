#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_DynamicVolumeDef_t {
    char m_source[0x4];
    char m_target[0x4];
    int32_t m_nHullIdx;
    Vector m_vSourceAnchorPos;
    Vector m_vTargetAnchorPos;
    uint32_t m_nAreaSrc;
    uint32_t m_nAreaDst;
    bool m_bAttached;
    char end_pad_2774[0x3];
};
