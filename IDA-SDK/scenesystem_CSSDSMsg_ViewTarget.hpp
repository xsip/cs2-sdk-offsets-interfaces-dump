#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class scenesystem_CSSDSMsg_ViewTarget {
    CUtlString m_Name;
    uint64_t m_TextureId;
    int32_t m_nWidth;
    int32_t m_nHeight;
    int32_t m_nRequestedWidth;
    int32_t m_nRequestedHeight;
    int32_t m_nNumMipLevels;
    int32_t m_nDepth;
    int32_t m_nMultisampleNumSamples;
    int32_t m_nFormat;
};
