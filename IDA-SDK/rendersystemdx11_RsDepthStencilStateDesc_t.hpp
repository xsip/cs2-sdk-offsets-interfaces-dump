#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "rendersystemdx11_RsStencilStateDesc_t.hpp"

class rendersystemdx11_RsDepthStencilStateDesc_t {
    char vTable4193[0x1];
    rendersystemdx11_RsComparison_t m_depthFunc;
    rendersystemdx11_RsStencilStateDesc_t m_stencilState;
};
