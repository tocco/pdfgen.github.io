<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

  <xsl:import href="../../../../../../../../../../../sdk2/internal/pdf_generator/pdf_generator.xsl"/>
  
  <xsl:template match="*[contains(@class, ' topic/q ')]" name="topic.q">
    <span class="q">
      <xsl:apply-templates/>
    </span>
  </xsl:template>

</xsl:stylesheet>